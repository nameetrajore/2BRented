const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bike",
  },
  bikeName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    validate: {
      validator: async function (value) {
        const booking = await mongoose.models.Booking.findOne({
          _id: { $ne: this._id },
          bike: this.bike,
          $or: [
            { startDate: { $lte: value }, endDate: { $gte: value } },
            {
              startDate: { $lte: this.endDate },
              endDate: { $gte: this.endDate },
            },
          ],
        });
        return !booking;
      },
      message: "Booking dates overlap with an existing booking.",
    },
  },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: async function (value) {
        const booking = await mongoose.models.Booking.findOne({
          _id: { $ne: this._id },
          bike: this.bike,
          $or: [
            { startDate: { $lte: value }, endDate: { $gte: value } },
            {
              startDate: { $lte: this.startDate },
              endDate: { $gte: this.startDate },
            },
          ],
        });
        return !booking;
      },
      message: "Booking dates overlap with an existing booking.",
    },
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropLocation: {
    type: String,
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
    type: String,
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
