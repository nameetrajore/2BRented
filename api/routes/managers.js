const Manager = require("../models/managers");

const getManager = async (req, res) => {
  try {
    const manager = await Manager.find(req.query);
    res.json(manager);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const postManager = async (req, res) => {
  const manager = new Manager({ ...req.body });

  try {
    const newManager = await manager.save();
    res.status(201).json(newManager);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putManager = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
};

const deleteManager = async (req, res) => {
  try {
    const manager = await Manager.deleteOne({ _id: req.params.id });
    res.json(manager);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getManager,
  postManager,
  putManager,
  deleteManager,
};
