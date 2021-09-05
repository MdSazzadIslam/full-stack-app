"use strict";

const Product = require("../models/productModel");
const { get, set } = require("../helpers/cacheHandler");

const getProducts = async (req, res) => {
  const perPage = parseInt(req.query.limit) || 10;
  let page = parseInt(req.query.page) || 1;

  let reg = new RegExp(req.query.searchBy, "i");

  try {
    const products = await Product.find({})
      .or([
        { title: { $regex: reg } },
        { availability: { $regex: reg } },
        { price: { $regex: reg } },
        { brand: { $regex: reg } },
        { condition: { $regex: reg } },
      ])
      .sort("-createdAt")
      .skip(perPage * page - perPage)
      .limit(perPage);
    const count = await Product.count();
    const pages = Math.ceil(count / perPage);

    return res.status(200).json({
      message: "Operation success",
      products,
      count,
      currentPage: page,
      pages,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Error occured while retriving the record" + error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const cacheCavalue = await get(req.params.id);
    if (cacheCavalue) {
      const cacheData = JSON.parse(cacheCavalue);

      return res
        .status(200)
        .json({ message: "Operation success", products: cacheData });
    }

    const products = await Product.findById({ _id: req.params.id });
    await set(req.params.id, JSON.stringify(products));

    return res.status(200).json({ message: "Operation success", products });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Error occured while retriving the record" + error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Record saved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Error occured while saving the record" + error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const exists = await product.findOne(req.params.id);
    if (exists === null || exists === undefined) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Record not found",
      });
    }
    const product = await Product.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (product) {
      return res.status(202).json({
        status: 202,
        success: false,
        message: "Record updated successfully",
      });
    } else {
      return res.status(500).json({
        status: 500,
        success: false,
        message: `Error occured while updating the record with id ${req.params.id} `,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message:
        `Error occured while updating the record with id ${req.params.id} ` +
        error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
};
