const Bike = require("../models/bikes");
const postBike = async (req, res) => {
  const bike = new Bike({
    name: req.body.name,
    year: req.body.year,
    model: req.body.model,
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
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const putBike = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
}

const deleteBike = (req, res) => {
  res.send({ type: "DELETE" }
)};

module.exports = {
  getBike,
  postBike,
  putBike,
  deleteBike,
};

