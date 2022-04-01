const mongoose = require("mongoose");
const DriverModel = require("./model");
const { argv } = require("yargs");

exports.addDriver = async (newDriver) => {
  try {
    const driver = new DriverModel(newDriver);
    await driver.save();
    console.log(
      `Driver added: ${argv.driver} is at ${argv.team}. ${argv.team}'s car uses a ${argv.powerunit} powerunit. ${argv.driver} currently has ${argv.points} points.`
    );
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
      name: argv.driver,
      team: argv.team,
      points: argv.points,
      powerunit: argv.powerunit,
    });
    console.log("Driver successfully updated.");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};
// JUST UPDATES FIRST INPUT DRIVER INTO THE DATABASE. FIND WAY TO TARGET SPECIFIC DRIVERS FOR UPDATING.

exports.deleteDriver = async () => {
  try {
    await DriverModel.deleteOne({ name: argv.driver });
    console.log(`"${argv.driver}" successfully deleted.`);
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.deleteAll = async () => {
  try {
    if (argv.driver) {
      await DriverModel.deleteMany({ name: argv.driver });
      console.log(`All drivers named ${argv.driver} deleted.`);
    } else if (argv.team) {
      await DriverModel.deleteMany({ team: argv.team });
      console.log(`All drivers driving for ${argv.team} deleted.`);
    } else if (argv.points) {
      await DriverModel.deleteMany({ points: argv.points });
      console.log(`All drivers with ${argv.points} points deleted.`);
    } else if (argv.powerunit) {
      await DriverModel.deleteMany({ powerunit: argv.powerunit });
      console.log(`All drivers using a ${argv.powerunit} deleted.`);
    } else {
      await DriverModel.deleteMany();
      console.log(`All drivers deleted from the database.`);
    }
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};
