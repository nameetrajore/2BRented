const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
  },
  paymentDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  paymentMethod: {
    type: String,
    enum: ["card", "bank-transfer", "cash"],
    required: true,
  },
  cardDetails: {
    cardNumber: {
      type: String,
      required: function () {
        return this.paymentMethod === "card";
      },
    },
    cardHolderName: {
      type: String,
      required: function () {
        return this.paymentMethod === "card";
      },
    },
    expiryDate: {
      type: Date,
      required: function () {
        return this.paymentMethod === "card";
      },
    },
    cvv: {
      type: String,
      required: function () {
        return this.paymentMethod === "card";
      },
    },
  },
  bankDetails: {
    accountNumber: {
      type: String,
      required: function () {
        return this.paymentMethod === "bank-transfer";
      },
    },
    routingNumber: {
      type: String,
      required: function () {
        return this.paymentMethod === "bank-transfer";
      },
    },
    accountName: {
      type: String,
      required: function () {
        return this.paymentMethod === "bank-transfer";
      },
    },
    bankName: {
      type: String,
      required: function () {
        return this.paymentMethod === "bank-transfer";
      },
    },
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
