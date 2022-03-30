require("dotenv").config();

const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to DB: Successful.");
  } catch (error) {
    console.log(error);
  }
};

connection();
