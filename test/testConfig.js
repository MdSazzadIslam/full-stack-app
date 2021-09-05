//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../backend/server");
const should = chai.should();
chai.use(chaiHttp);

//Export this to use in multiple files
module.exports = {
  chai: chai,
  server: server,
  should: should,
};
