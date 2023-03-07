const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  // customerId: {
  //   type: String,
  //   required: true,
  // },
  customerName: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerPhoneNumber: {
    type: Number,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
    unique: true
  },
  customerPassword: {
    type: String,
    required: true,
  },
  customerDrivingLicense: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Customers", customerSchema);
