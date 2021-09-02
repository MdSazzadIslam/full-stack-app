"use strict";

const express = require("express");

const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
