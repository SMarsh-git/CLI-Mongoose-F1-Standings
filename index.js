require("dotenv").config();

const mongoose = require("mongoose");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const {
  addDriver,
  listDriver,
  updateDriver,
  deleteDriver,
  deleteAll,
} = require("./utils/methods");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to DB: Successful.");
  } catch (error) {
    console.log(error);
  }
  console.log("Welcome to the Formula One 2022 season standings database.");
  if (argv.add) {
    await addDriver({
      name: argv.driver,
      team: argv.team,
      points: argv.points,
      powerunit: argv.powerunit,
    });
  } else if (argv.list) {
    await listDriver();
  } else if (argv.update) {
    await updateDriver();
  } else if (argv.delete) {
    await deleteDriver();
  } else if (argv.deleteAll) {
    await deleteAll();
  } else {
    mongoose.connection.close();
    console.log(
      "Command not found. Please input --add, --list, --update, --delete, or --deleteAll to interact with the database."
    );
  }
})();
