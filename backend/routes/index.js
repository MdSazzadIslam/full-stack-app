"use strict";

const todoRoute = require("./productRoute");

exports.loadRoutes = function (app) {
  app.use("/api/v1/shoparize", todoRoute);
};
