const Bike = require("../models/bikes");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const http = require('http');

const getBikeImages = async (req, res) => {
  const filePath = path.join(process.cwd(), 'uploads', req.params.filename);
  console.log('File path:', __dirname);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error:', err);
      res.status(404).end();
      return;
    }

    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', (error) => {
      console.error('Error:', error);
      res.status(404).end();
    });

    fileStream.pipe(res);
  });
};


const postBike = async (req, res) => {
  // console.log("we are here", req.body);
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      const dir = './uploads';
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      cb(null, dir);
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + '-' + file.originalname);
    }
  });

  const upload = multer({ storage: storage }).array('images', 5); // change 'single' to 'array' and set a limit of 5 files

  // Call the upload middleware here to process the file uploads
  upload(req, res, async function (err) { // wrap the callback function inside async
    // console.log("these are the files", req.files)
    if (err) {
      // Handle any errors
      console.error(err);
      res.status(400).json({ message: "Failed to upload images" });
      return;
    }

    // Get the file paths of the uploaded images
    const imageUrls = req.files.map((file) => file.path);
    const bike = new Bike({ ...req.body, imageUrl: imageUrls, location: JSON.parse(req.body.location)});// assuming you have a 'images' field in your Bike schema 
    // console.log("this is the file",bike)
    // console.log(imageUrls)
    try {
      // console.log("this is the file",req.body)
      const newBike = await bike.save();
      res.status(201).json(newBike);
      // console.log("posted", bike)
    } catch (err) {
      res.status(400).json({ message: err.message });
      console.log(err.message)
    }
  });
};

const getBike = async (req, res) => {
  const incomingQuery = req.query;
  // console.log(incomingQuery);
  const outgoingQuery = { ...incomingQuery };

  delete outgoingQuery.priceHigh;
  delete outgoingQuery.priceLow;
  delete outgoingQuery.rating;
  delete outgoingQuery.bikeAge;
  delete outgoingQuery.kmsDriven;
  delete outgoingQuery.pickupLocation;

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

  outgoingQuery.bookingDates = {
    $not: {
      $elemMatch: {
        $in: dateArray,
      },
    },
  };



  console.log(outgoingQuery, dateArray);
  try {
    const bikes = await Bike.find(outgoingQuery);

    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchBike = async (req, res) => {
  try {
    const bike = await Bike.updateOne(
      { _id: req.params.id },
      { $set: req.query }
    );
    res.json(bike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBike = (req, res) => {
  res.send({ type: "DELETE" });
};

module.exports = {
  getBike,
  postBike,
  patchBike,
  deleteBike,
  getBikeImages,
};
