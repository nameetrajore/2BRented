const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bike",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "active", "completed", "cancelled"],
    default: "pending",
  },
});

bookingSchema.path("startDate").validate(function (value) {
  return value < this.endDate;
}, "startDate must be less than endDate");

bookingSchema.path("endDate").validate(function (value) {
  return value > this.startDate;
}, "endDate must be greater than startDate");

module.exports = mongoose.model("Booking", bookingSchema);
