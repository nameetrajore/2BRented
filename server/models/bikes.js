const mongoose = require("mongoose");
const Location = require("./locations");

const bikeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  location: {
    type: Location.schema,
    required: true,
  },
  type: {
    type: String,
    enum: ["road", "mountain", "city"],
    required: true,
  },
  fuelType: {
    type: String,
    enum: ["petrol", "electric"],
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  dailyRate: {
    type: Number,
    required: true,
  },
  kmsDriven: {
    type: Number,
    required: true,
  },
  bikeAge: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: [String],
    required: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
  },
});

module.exports = mongoose.model("Bike", bikeSchema);
