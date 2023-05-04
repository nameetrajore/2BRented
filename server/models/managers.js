const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  managerName: {
    type: String,
    required: true,
  },
  managerDesignation: {
    type: String,
    required: true,
  },
  managerPhoneNumber: {
    type: Number,
    required: true,
  },
  managerEmail: {
    type: String,
    required: true,
  },
  managerPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Manager", managerSchema);
