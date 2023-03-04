const mongoose = require("mongoose");
const rented = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  bikeId: {
    type: String,
    required: true,
  },
  adminPhoneNumber: {
    type: Number,
    required: true,
  },
  dates: {
    type: [Date],
    required: true,
  },
});

module.exports = mongoose.model("Admins", adminSchema);
