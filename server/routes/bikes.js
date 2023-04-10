const Bike = require("../models/bikes");

const postBike = async (req, res) => {
  const bike = new Bike({ ...req.body });

  try {
    const newBike = await bike.save();
    res.status(201).json(newBike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBike = async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(req.query);
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
};
