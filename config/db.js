const mongoose = require("mongoose");
const config = require("../config/config");

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(config.config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};