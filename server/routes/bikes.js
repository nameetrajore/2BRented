const Bike = require("../models/bikes");

const postBike = async (req, res) => {
  const bike = new Bike({
    modelName: req.body.modelName,
    modelYear: req.body.modelYear,
    modelCompany : req.body.modelCompany,
    modelCategory : req.body.modelCategory,
    registrationNumber : req.body.registrationNumber,
    bookedDates : req.body.bookedDates,
    dailyPrice : req.body.dailyPrice,
    mileage : req.body.mileage,
    bikePhoto : req.body.bikePhoto
  });

  try {
    const newBike = await bike.save();
    res.status(201).json(newBike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

const getBike = async (req, res) => {
  try {
    const bikes = await Bike.find(req.query);
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const putBike = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
};

const deleteBike = (req, res) => {
  res.send({ type: "DELETE" });
};

module.exports = {
  getBike,
  postBike,
  putBike,
  deleteBike,
};
