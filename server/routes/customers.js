const Customer = require("../models/customers");

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.find(req.query);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
}
const postCustomer = async (req, res) => {
  const customer = new Customer({
    customerName: req.body.customerName,
    customerAddress : req.body.customerAddress,
    customerPhoneNumber : req.body.customerPhoneNumber,
    customerEmail : req.body.customerEmail,
    customerPassword : req.body.customerPassword,
    customerDrivingLicense : req.body.customerDrivingLicense
  });
  
  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  };
  
const putCustomer = (req, res) => {
    res.send({ type: "PUT", id: req.params.id });
  }
  
const deleteCustomer = (req, res) => {
    res.send({ type: "DELETE" }
  )};
  
  module.exports = {
    getCustomer,
    postCustomer,
    putCustomer,
    deleteCustomer
  };
  