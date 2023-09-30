const Product = require("../models/productModel");

//Create Product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

exports.getAllProducts = (req, res) => {
  res.status(201).send({
    success: true,
    message: "Working fine",
  });
};
