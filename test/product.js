const { chai, server, should } = require("./testConfig");
/**
 * Test cases to test all the book APIs
 * Covered Routes:
 * (3) Get all products
 * (4) Get single product
 */

describe("Product API", () => {
  // Prepare data for testing

  const id = "612ff5fa0edf8735408fe9ea";

  /*
   * Test the /GET route
   */
  describe("/GET All products", () => {
    it("it should GET all the products", (done) => {
      chai
        .request(server)
        .get("/api/v1/shoparize/products")

        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("message").eql("Operation success");
          //testData._id = res.body.data[0]._id;
          done();
        });
    });
  });

  /*
   * Test the /GET/:id route
   */
  describe("/GET/:id product", () => {
    it("it should GET the product", (done) => {
      chai
        .request(server)
        .get(`/api/v1/shoparize/products/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("message").eql("Operation success");
          done();
        });
    });
  });
});
