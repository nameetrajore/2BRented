const mongoose = require("mongoose");
const bikeSchema = new mongoose.Schema({
  // bikeId: {
  //   type: String,
  //   required: true,
  // },
  modelName: {
    type: String,
    required: true,
  },
  modelYear: {
    type: Date,
    required: false,
  },
  modelCompany: {
    type: String,
    required: true,
  },
  modelCategory: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  bookedDates: {
    type: [Date],
    required: false,
  },
  dailyPrice: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  bikePhoto: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bikes", bikeSchema);
