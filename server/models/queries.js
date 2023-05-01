const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Query", querySchema);
