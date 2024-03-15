const { deleteBookMarkById } = require("../controller/bookmarkController");
const {
  addProduct,
  getProductList,
  updateProductById,
  getProductBySellerId,
  deleteProductById,
  getBikeById,
} = require("../controller/productController");

const productRoutes = (app) => {
  console.log("Product Routes called");
  app.route("/product").post(addProduct).put(updateProductById);
  app.route("/products").get(getProductList);
  app.route("/product/:sellerId").get(getProductBySellerId);
  app.route("/product/:uid").delete(deleteProductById);
  app.route("/bike/:uid").get(getBikeById);
};

module.exports = { productRoutes };
