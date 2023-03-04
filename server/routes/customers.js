const Customer = require("../models/customers");

const getCustomer = (req, res) => {
    res.send({type:"GET"})
}
const postCustomer = (req, res) => {
    res.send({type:"POST"})
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
  