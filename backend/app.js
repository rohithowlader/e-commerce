const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
//Routes Import
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);
//middileware for error
app.use(errorMiddleware);

module.exports = app;
