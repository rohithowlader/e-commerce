const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllProductDetails,
} = require("../controllers/productController");
//import {createProduct,getAllProducts} from "../controllers/productController"
const router = express.Router();
router.route("/products/new").post(createProduct);
router.route("/products").get(getAllProducts);
router
  .route("/products/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getAllProductDetails);
module.exports = router;
