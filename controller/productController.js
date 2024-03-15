const mongoose = require("mongoose");

const { SellerSchema } = require("../model/sellerModel");

const Product = mongoose.model("product", SellerSchema);
const { v4: uuidv4 } = require("uuid");

const addProduct = async (req, res) => {
  const {
    sellerName,
    sellerId,
    photo,
    model,
    brandName,
    price,
    year,
    cc,
    milage,
    kilometersDriven,
    ownership,
    location,
    description,
    registrationNo,
  } = req.body;

  const product = new Product({
    sellerName,
    sellerId,
    photo,
    model,
    brandName,
    price,
    year,
    cc,
    milage,
    kilometersDriven,
    ownership,
    location,
    description,
    registrationNo,
    uid: uuidv4(),
  });

  await product.save();
  res.json(product);
};

const getProductList = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Default to limit 10 if not provided

  const skip = (page - 1) * limit;

  const {
    brandName,
    price,
    year,
    kilometersDriven,
    ownership,
    priceGreaterThan,
    priceLesserThan,
    kmGreaterThan,
    kmLesserThan,
  } = req.query;
  let query = {};
  if (brandName) {
    query.brandName = brandName;
  }

  if (priceGreaterThan && priceLesserThan) {
    query.price = { $gte: priceGreaterThan, $lte: priceLesserThan };
  }


  if (kmGreaterThan && kmLesserThan) {
    query.kilometersDriven = { $gte: kmGreaterThan, $lte: kmLesserThan };
  }
  if (year) {
    query.year = year;
  }


  if (ownership) {
    query.ownership = ownership;
  }

  const productList = await Product.find(query).skip(skip).limit(limit).exec();

  res.json(productList);
};

const updateProductById = async (req, res) => {
  const { uid } = req.body;
  const updatedProduct = await Product.findOneAndUpdate({ uid }, req.body, {
    upsert: true,
    new: true,
  });
  console.log(updatedProduct);
  res.json(updatedProduct);
};

const getProductBySellerId = async (req, res) => {
  const { sellerId } = req.params;
  console.log(req);
  const product = await Product.find({ sellerId });
  console.log(product);
  res.json(product);
};

const getBikeById = async (req, res) => {
  const { uid } = req.params;
  const bikeDetail = await Product.findOne({ uid });
  res.json(bikeDetail);
};

const deleteProductById = async (req, res) => {
  const { uid } = req.params;
  const product = await Product.deleteOne({ uid });
  console.log(product);
  res.json(uid);
};

module.exports = {
  addProduct,
  getProductList,
  updateProductById,
  getProductBySellerId,
  deleteProductById,
  getBikeById,
};
