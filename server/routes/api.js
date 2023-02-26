const express = require("express");
const router = express.Router();
const Bike = require("../models/bikes");

router.get("/bikes", async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/bikes", async (req, res) => {
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
});

router.put("/bikes/:id", (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
});

router.delete("/bikes/:id", (req, res) => {
  res.send({ type: "GET" });
});

module.exports = router;
