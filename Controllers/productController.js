const db = require("../Models");

//Create Main Model
const Product = db.products;
const Review = db.reviews;

//Main Work

// 1. Create Product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log("product:", product);
};

// 2. Get All Products
const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

// 3. Get Single Product
const getOneProduct = async (req, res) => {
  let { id } = req.params;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4. UpdateProduct
const updateProduct = async (req, res) => {
  let { id } = req.params;
  let product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// 5. Delete Product
const deleteProduct = async (req, res) => {
  let { id } = req.params;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("product is successfully deleted");
};

// 6. Get Published Product
const getPublishProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishProduct,
};
