const prisma = require("../lib/prisma");

const getOwner = async (req, res) => {
  try {
    const where = {};
    if (req.query.ownerEmail) where.ownerEmail = req.query.ownerEmail;
    if (req.query.id) where.id = req.query.id;

    const owners = await prisma.owner.findMany({ where });
    res.json(owners.map((o) => ({ ...o, _id: o.id })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postOwner = async (req, res) => {
  try {
    const owner = await prisma.owner.create({
      data: {
        ...req.body,
        locationPincode: parseInt(req.body.locationPincode),
      },
    });
    res.status(201).json({ ...owner, _id: owner.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putOwner = (req, res) => {
  res.send({ type: "PUT", id: req.params.id });
};

const deleteOwner = async (req, res) => {
  try {
    await prisma.owner.delete({ where: { id: req.params.id } });
    res.json({ message: "Owner deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getOwner, postOwner, putOwner, deleteOwner };
