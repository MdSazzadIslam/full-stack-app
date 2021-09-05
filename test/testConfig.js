//During the automated test the env variable, We will set it to "test"
process.env.NODE_ENV = "test";
process.env.MONGO_URL =
  "mongodb+srv://mern-ecom123:mern-ecom123@mern-ecommerce.ksbpm.mongodb.net/shoparize?retryWrites=true&w=majority";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../backend/server");
let should = chai.should();
chai.use(chaiHttp);

//Export this to use in multiple files
module.exports = {
  chai: chai,
  server: server,
  should: should,
};
