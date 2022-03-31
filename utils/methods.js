const mongoose = require("mongoose");
const DriverModel = require("./model");

exports.addDriver = async (newDriver) => {
  try {
    const driver = new DriverModel(newDriver);
    await driver.save();
    console.log("Driver successfully input.");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.listDriver = async () => {
  try {
    console.log(await DriverModel.find({}));
  } catch (error) {
    console.log(error);
  }
  console.log("Connection closing...");
  mongoose.connection.close();
};

exports.updateDriver = async (name) => {
  try {
    await DriverModel.updateOne(name);
    console.log("Driver successfully updated.");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.deleteDriver = async () => {
  try {
    await DriverModel.deleteOne({ name: "placeholder" });
    console.log("Driver successfully deleted.");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};


// await DriverModel.updateOne({
//   name: "placeholder",
//   team: "team placeholder",
//   points: "points placeholder",
//   powerunit: "pwoerunit placeholder",
// });