const Query = require("../models/queries");

const getQuery = async (req, res) => {
  try {
    const admin = await Query.find(req.query);
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const postQuery = async (req, res) => {
  const admin = new Query({ ...req.body });
  console.log(req.body);
  try {
    const newQuery = await admin.save();
    res.status(201).json(newQuery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getQuery,
  postQuery,
};
