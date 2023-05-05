const mongoose = require("mongoose");
const Location = require("./locations");

const ownerSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
  },
  ownerAddress: {
    type: Location.schema,
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
  // bikes: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Bike",
  //   },
  // ],
});

module.exports = mongoose.model("Owner", ownerSchema);
