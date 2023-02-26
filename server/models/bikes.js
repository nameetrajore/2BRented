const mongoose = require("mongoose");
const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bikes", bikeSchema);
