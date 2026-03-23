const prisma = require("../lib/prisma");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const multer = require("multer");

const bucket = "2brented-bikes";
const region = "ap-south-1";

const uploadToS3 = async (filePath, originalFilename, mimetype) => {
  const client = new S3Client({
    region,
    credentials: {
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      accessKeyId: process.env.S3_ACCESS_KEY,
    },
  });

  const parts = originalFilename.split(".");
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + "." + ext;

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Body: fs.readFileSync(filePath),
      Key: newFilename,
      ContentType: mimetype,
    })
  );

  return `https://${bucket}.s3.${region}.amazonaws.com/${newFilename}`;
};

const postBike = async (req, res) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = "/tmp";
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage }).array("images", 5);

  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: "Failed to upload images" });
    }

    const uploadedFiles = [];
    for (const file of req.files) {
      const url = await uploadToS3(file.path, file.originalname, file.mimetype);
      uploadedFiles.push(url);
    }

    const location = JSON.parse(req.body.location);
    const { location: _loc, ...rest } = req.body;

    try {
      const bike = await prisma.bike.create({
        data: {
          brand: rest.brand,
          model: rest.model,
          year: new Date(rest.year),
          locationState: location.state,
          locationCity: location.city,
          locationPincode: parseInt(location.pincode),
          locationAddress: location.address,
          locationGmapLink: location.gmapLink || null,
          type: rest.type,
          transmission: rest.transmission || null,
          fuelType: rest.fuelType,
          registrationNumber: rest.registrationNumber,
          dailyRate: parseFloat(rest.dailyRate),
          kmsDriven: parseInt(rest.kmsDriven),
          bikeAge: parseInt(rest.bikeAge),
          rating: parseFloat(rest.rating),
          mileage: parseFloat(rest.mileage),
          imageUrl: uploadedFiles,
          ownerId: rest.ownerId || null,
          bookingDates: [],
        },
      });
      res.status(201).json({ ...bike, _id: bike.id });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};

const getBike = async (req, res) => {
  const q = req.query;
  const where = {};

  if (q.owner) where.ownerId = q.owner;
  if (q.ownerId) where.ownerId = q.ownerId;

  if (q.priceHigh && q.priceLow) {
    where.dailyRate = {
      gte: parseFloat(q.priceLow),
      lte: parseFloat(q.priceHigh),
    };
  }

  if (q.rating) where.rating = { gte: parseFloat(q.rating) };
  if (q.bikeAge) where.bikeAge = { lte: parseInt(q.bikeAge) };
  if (q.kmsDriven) where.kmsDriven = { lte: parseInt(q.kmsDriven) };

  if (q.pickupLocation && q.pickupLocation !== "") {
    where.locationCity = { contains: q.pickupLocation, mode: "insensitive" };
  }

  if (q.type) where.type = q.type;
  if (q.brand) where.brand = { contains: q.brand, mode: "insensitive" };
  if (q.fuelType) where.fuelType = q.fuelType;

  if (q.pickupDate && q.dropDate) {
    const dateArray = [];
    const cur = new Date(q.pickupDate);
    const end = new Date(q.dropDate);
    while (cur <= end) {
      dateArray.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    where.NOT = { bookingDates: { hasSome: dateArray } };
  }

  try {
    const bikes = await prisma.bike.findMany({ where });
    res.json(bikes.map((b) => ({ ...b, _id: b.id })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchBike = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.bookingDates)
      data.bookingDates = data.bookingDates.map((d) => new Date(d));
    if (data.dailyRate) data.dailyRate = parseFloat(data.dailyRate);
    if (data.kmsDriven) data.kmsDriven = parseInt(data.kmsDriven);
    if (data.bikeAge) data.bikeAge = parseInt(data.bikeAge);
    if (data.rating) data.rating = parseFloat(data.rating);
    if (data.mileage) data.mileage = parseFloat(data.mileage);
    if (data.locationPincode) data.locationPincode = parseInt(data.locationPincode);
    if (data.year) data.year = new Date(data.year);

    const bike = await prisma.bike.update({
      where: { id: req.params.id },
      data,
    });
    res.json({ ...bike, _id: bike.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBike = async (req, res) => {
  try {
    await prisma.bike.delete({ where: { id: req.params.id } });
    res.json({ message: "Bike deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBike, postBike, patchBike, deleteBike };
