var csv = require("csvtojson");

const insertProduct = () => {
  await Product.deleteMany();
  csv()
    .fromFile("google-shopping-feed-5305.csv")
    .then((jsonObj) => {
      //the jsonObj will contain all the data in JSONFormat.
      //insertmany is used to save bulk data in database.
      //saving the data in collection(table)
      Product.insertMany(jsonObj, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    });
};

const destroyProduct = async () => {
  await Product.deleteMany();
};

(async () => {
  await connect();

  if (process.argv[2] === "-d") {
    await destroyProduct();
  } else {
    await insertProduct();
  }
})();
