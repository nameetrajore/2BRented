const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  // customerId: {
  //   type: String,
  //   required: true,
  // },
  adminName: {
    type: String,
    required: true,
  },
  adminPhoneNumber: {
    type: Number,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admins", adminSchema);
