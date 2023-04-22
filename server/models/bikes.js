const mongoose = require("mongoose");
const Location = require("./locations");

const reviewSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

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
    enum: ["Road", "Mountain", "City", "Super-Bike", "Sport"],
    required: true,
  },
  transmission: {
    type: String,
    enum: ["Geared", "Non-Geared"],
  },
  fuelType: {
    type: String,
    enum: ["Petrol", "Electric"],
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
  reviews: {
    type: [Review.schema],
    required: false,
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
