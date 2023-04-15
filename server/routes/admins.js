const Admin = require("../models/admins");

const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find(req.query);
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const postAdmin = async (req, res) => {
  const admin = new Admin({ ...req.body });

  try {
    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putAdmin = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
};

const deleteAdmin = (req, res) => {
  res.send({ type: "DELETE" });
};

module.exports = {
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin,
};
