const prisma = require("../lib/prisma");

const getManager = async (req, res) => {
  try {
    const where = {};
    if (req.query.managerEmail) where.managerEmail = req.query.managerEmail;
    if (req.query.id) where.id = req.query.id;

    const managers = await prisma.manager.findMany({ where });
    res.json(managers.map((m) => ({ ...m, _id: m.id })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postManager = async (req, res) => {
  try {
    const manager = await prisma.manager.create({ data: req.body });
    res.status(201).json({ ...manager, _id: manager.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putManager = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
};

const deleteManager = async (req, res) => {
  try {
    await prisma.manager.delete({ where: { id: req.params.id } });
    res.json({ message: "Manager deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getManager, postManager, putManager, deleteManager };
