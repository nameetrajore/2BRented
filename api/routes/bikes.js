const Bike = require("../models/bikes");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const http = require("http");
const multer = require("multer");
const bucket = "2brented-app";
const uploadToS3 = async (path, originalFilename, mimetype) => {
  const client = new S3Client({
    region: "eu-north-1",
    credentials: {
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      accessKeyId: process.env.S3_ACCESS_KEY,
    },
  });

  const parts = originalFilename.split(".");
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + "." + ext;
  const data = await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Body: fs.readFileSync(path),
      Key: newFilename,
      ContentType: mimetype,
      ACL: "public-read",
    })
  );

  return `https://${bucket}.s3.amazonaws.com/${newFilename}`;
};

// const getBikeImages = async (req, res) => {
//   const filePath = path.join(process.cwd(), "uploads", req.params.filename);
//   //console.log("File path:", __dirname);

//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error("Error:", err);
//       res.status(404).end();
//       return;
//     }

//     const fileStream = fs.createReadStream(filePath);
//     fileStream.on("error", (error) => {
//       console.error("Error:", error);
//       res.status(404).end();
//     });

//     fileStream.pipe(res);
//   });
// };

const postBike = async (req, res) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = "/tmp";
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array("images", 5); // change 'single' to 'array' and set a limit of 5 files

  // Call the upload middleware here to process the file uploads
  upload(req, res, async function (err) {
    // wrap the callback function inside async
    if (err) {
      // Handle any errors
      console.error(err);
      res.status(400).json({ message: "Failed to upload images" });
      return;
    }

    // Get the file paths of the uploaded images
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
      const { path, originalname, mimetype } = req.files[i];
      const url = await uploadToS3(path, originalname, mimetype);
      uploadedFiles.push(url);
    }
    const bike = new Bike({
      ...req.body,
      imageUrl: uploadedFiles,
      location: JSON.parse(req.body.location),
    });
    try {
      const newBike = await bike.save();
      res.status(201).json(newBike);
      //console.log(bike);
    } catch (err) {
      res.status(400).json({ message: err.message });
      //console.log(err.message);
    }
  });
};

const getBike = async (req, res) => {
  const incomingQuery = req.query;
  //console.log("inside getBike");
  const outgoingQuery = { ...incomingQuery };

  delete outgoingQuery.priceHigh;
  delete outgoingQuery.priceLow;
  delete outgoingQuery.rating;
  delete outgoingQuery.bikeAge;
  delete outgoingQuery.kmsDriven;
  delete outgoingQuery.pickupLocation;

  if (incomingQuery.owner) {
    outgoingQuery.owner = incomingQuery.owner;
  }

  if (incomingQuery.priceHigh && incomingQuery.priceLow) {
    outgoingQuery.dailyRate = {
      $gte: incomingQuery.priceLow,
      $lte: incomingQuery.priceHigh,
    };
  }

  if (incomingQuery.rating) {
    outgoingQuery.rating = {
      $gte: incomingQuery.rating,
    };
  }

  if (incomingQuery.bikeAge) {
    outgoingQuery.bikeAge = {
      $lte: incomingQuery.bikeAge,
    };
  }

  if (incomingQuery.kmsDriven) {
    outgoingQuery.kmsDriven = {
      $lte: incomingQuery.kmsDriven,
    };
  }

  if (incomingQuery.pickupLocation && incomingQuery.pickupLocation != "") {
    outgoingQuery["location.city"] = {
      $regex: new RegExp(incomingQuery.pickupLocation),
      $options: "i",
    };
  }

  const dateArray = [];

  // Loop through each day between start and end date
  const currentDate = new Date(incomingQuery.pickupDate);
  while (currentDate <= new Date(incomingQuery.dropDate)) {
    // Add the current date to the array
    dateArray.push(new Date(currentDate));

    // Increment the current date
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (incomingQuery.pickupDate && incomingQuery.dropDate)
    outgoingQuery.bookingDates = {
      $not: {
        $elemMatch: {
          $in: dateArray,
        },
      },
    };

  try {
    const bikes = await Bike.find(outgoingQuery);

    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchBike = async (req, res) => {
  try {
    //console.log("here");
    const bike = await Bike.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(bike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBike = async (req, res) => {
  try {
    const bike = await Bike.deleteOne({ _id: req.params.id });
    res.json(bike);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBike,
  postBike,
  patchBike,
  deleteBike,
};
