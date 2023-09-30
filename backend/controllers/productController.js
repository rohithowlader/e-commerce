const getAllProducts = (req, res) => {
  res.status(201).send({
    success: true,
    message: "Working fine",
  });
};
module.exports = getAllProducts;
