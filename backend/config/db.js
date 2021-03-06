"use strict";

const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  const db = process.env.MONGO_URI;
  const connect = () => {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
      })
      .then(() => {
        return console.info("Successfully connected to databse");
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect); //if connecting problem to db please retry

  //error handler
  mongoose.connection.on("error", function (err) {
    console.log(err);
  });
};
