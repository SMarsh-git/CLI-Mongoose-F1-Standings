const mongoose = require("mongoose");
const DriverModel = require("./model");
const { argv } = require("yargs");

exports.addDriver = async (newDriver) => {
  try {
    const driver = new DriverModel(newDriver);
    await driver.save();
    console.log(`Driver added: ${argv.driver} is at ${argv.team}. ${argv.team}'s car uses a ${argv.powerunit} powerunit. ${argv.driver} currently has ${argv.points} points.`);
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

exports.updateDriver = async () => {
  try {
    await DriverModel.updateOne({
      name: "placeholder",
      team: "team placeholder",
      points: "points placeholder",
      powerunit: "powerunit placeholder",
    });
    console.log("Driver successfully updated.");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.deleteDriver = async () => {
  try {
    await DriverModel.deleteOne({ driver: argv.driver });
    console.log(`"${argv.driver}" successfully deleted.`);
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

//BROKEN JUST DELETES INDEX POSITION 0 OF THE DATABASE.