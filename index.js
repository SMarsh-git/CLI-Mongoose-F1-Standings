require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const {
  addDriver,
  listDriver,
  updateDriver,
  deleteDriver,
} = require("./utils/methods");

(async () => {
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
    updateDriver();
  } else if (argv.delete) {
    await deleteDriver();
  } else {
    mongoose.connection.close();
    console.log(
      "Command not found. Please input --add, --list, --update, or --delete to interact with the database."
    );
  }
})();
