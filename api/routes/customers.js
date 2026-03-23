const prisma = require("../lib/prisma");

const getCustomer = async (req, res) => {
  try {
    const where = {};
    if (req.query.customerEmail) where.customerEmail = req.query.customerEmail;
    if (req.query.id) where.id = req.query.id;

    const customers = await prisma.customer.findMany({ where });
    res.json(customers.map((c) => ({ ...c, _id: c.id })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postCustomer = async (req, res) => {
  try {
    const customer = await prisma.customer.create({
      data: {
        ...req.body,
        locationPincode: parseInt(req.body.locationPincode),
        rating: parseFloat(req.body.rating || 0),
      },
    });
    res.status(201).json({ ...customer, _id: customer.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const patchCustomer = async (req, res) => {
  try {
    if (req.query.addFavourite) {
      await prisma.customer.update({
        where: { id: req.params.id },
        data: { favourites: { connect: { id: req.query.addFavourite } } },
      });
      res.json({ message: "Favourite added" });
    } else if (req.query.removeFavourite) {
      await prisma.customer.update({
        where: { id: req.params.id },
        data: { favourites: { disconnect: { id: req.query.removeFavourite } } },
      });
      res.json({ message: "Favourite removed" });
    } else {
      const customer = await prisma.customer.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json({ ...customer, _id: customer.id });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await prisma.customer.delete({ where: { id: req.params.id } });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCustomer, postCustomer, patchCustomer, deleteCustomer };
