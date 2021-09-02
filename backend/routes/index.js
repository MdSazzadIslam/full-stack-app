"use strict";

const productRoute = require("./productRoute");

exports.loadRoutes = function (app) {
  app.use("/api/v1/shoparize", productRoute);
};
