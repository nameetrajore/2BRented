const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema({
  // ownerId: {
  //   type: String,
  //   required: true,
  // },
  ownerName: {
    type: String,
    required: true,
  },
  modelAddress: {
    type: String,
    required: true,
  },
  ownerPhoneNumber: {
    type: Number,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  ownerPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Owners", ownerSchema);
