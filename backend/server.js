"use strict";

const express = require("express");
const middleware = require("./middlewares");
const router = require("./routes");
const connect = require("./config/db");

const app = express();

middleware.loadMiddlewares(app); //loading all the middlewares
router.loadRoutes(app); //Router configuration

app.get("/", (req, res) => {
  res.send("API is running");
});

(async () => {
  await connect();

  const PORT = process.env.PORT | 5000;
  app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });
})();
