const express = require("express");
const app = express();

//Routes Import
const product = require("./routes/productRoutes");
app.use("/api/v1", product);
app.use("", (req, res) => {
  res.status(201).send({
    success: true,
    message: "Working fine",
  });
});
module.exports = app;
