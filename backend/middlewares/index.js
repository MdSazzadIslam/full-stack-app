"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { notFound, errorHandler } = require("./errorHandler");

exports.loadMiddlewares = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(notFound);
  app.use(errorHandler);
};
