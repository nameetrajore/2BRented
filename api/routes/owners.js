const Owner = require("../models/owners");

const getOwner = async (req, res) => {
  try {
    const owner = await Owner.find(req.query);
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postOwner = async (req, res) => {
  const owner = new Owner({ ...req.body });

  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putOwner = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
};

const deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.deleteOne({ _id: req.params.id });
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOwner,
  postOwner,
  putOwner,
  deleteOwner,
};
