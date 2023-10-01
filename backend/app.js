const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
//Routes Import
const product = require("./routes/productRoutes");
app.use("/api/v1", product);

//middileware for error
app.use(errorMiddleware);

module.exports = app;
