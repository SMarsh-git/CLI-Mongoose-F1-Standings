const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  driver: {
    type: String,
    require: true,
  },

  team: {
    type: String,
    default: "Team not specified.",
  },

  points: {
    type: String,
    default: "Points not specified.",
  },

  powerunit: {
    type: String,
    default: "Power unit not specified.",
  },
});

const DriverModel = mongoose.model("Drivers", driverSchema);

module.exports = DriverModel;
