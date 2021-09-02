"use strict";

const Product = require("../models/productModel");

const getProducts = (req, res) => {
  SubTask.find({})
    .sort({ createdAt: -1 })
    .exec(function (err, data) {
      if (err)
        return res.status(500).json({
          status: 500,
          success: false,
          message: "Error occured while retriving the record" + error.message,
        });

      return res.status(200).json(data);
    });
};

const getProduct = (req, res) => {
  SubTask.findById({ id: req.params.id })
    .sort({ createdAt: -1 })
    .exec(function (err, data) {
      if (err)
        return res.status(500).json({
          status: 500,
          success: false,
          message: "Error occured while retriving the record" + error.message,
        });
      return res.status(200).json(data);
    });
};

const createProduct = (req, res) => {
  const product = new Product(req.body);

  product.save(function (err) {
    if (err)
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Error occured while saving the record" + error.message,
      });

    return res.status(200).json({
      status: 201,
      success: true,
      message: "Record saved successfully",
    });
  });
};

const updateProduct = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, data) {
      if (err)
        return res.status(500).json({
          status: 500,
          success: false,
          message:
            `Error occured while updating the record with id ${req.params.id} ` +
            error.message,
        });

      if (!data) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `Can not update the record with id ${req.params.id}`,
        });
      } else {
        return res.status(202).json({
          status: 202,
          success: false,
          message: "Record updated successfully",
        });
      }
    }
  );
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
};
