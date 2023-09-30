const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
//import {createProduct,getAllProducts} from "../controllers/productController"
const router = express.Router();
router.route("/products/new").post(createProduct);
router.route("/products").get(getAllProducts);
module.exports = router;
