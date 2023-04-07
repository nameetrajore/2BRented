const mongoose = require("mongoose");
const Location = require("./locations");
const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: Location.schema,
    required: true,
  },
  customerPhoneNumber: {
    type: Number,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
    unique: true,
  },
  customerPassword: {
    type: String,
    required: true,
  },
  customerDrivingLicense: {
    type: String,
    required: false,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
