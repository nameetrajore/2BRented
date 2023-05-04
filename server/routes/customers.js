const Customer = require("../models/customers");

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.find(req.query);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postCustomer = async (req, res) => {
  const customer = new Customer({ ...req.body });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const patchCustomer = async (req, res) => {
  console.log(req.query);
  try {
    if (req.query.addFavourite) {
      const customer = await Customer.updateOne(
        { _id: req.params.id },
        { $addToSet: { favourites: req.query.addFavourite } }
      );
      res.json(customer);
    } else if (req.query.removeFavourite) {
      const customer = await Customer.updateOne(
        { _id: req.params.id },
        { $pull: { favourites: req.query.removeFavourite } }
      );
      res.json(customer);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.deleteOne({ _id: req.params.id });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCustomer,
  postCustomer,
  patchCustomer,
  deleteCustomer,
};
