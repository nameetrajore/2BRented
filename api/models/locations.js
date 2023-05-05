const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gmapLink: {
    type: String,
    required: false,
  },
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
