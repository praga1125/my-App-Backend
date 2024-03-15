const {
  addBookMark,
  getBookMarkList,
  updateBookMarkById,
  getBookMarkById,
  deleteBookMarkById,
} = require("../controller/bookmarkController");

const bookmarkRoutes = (app) => {
  console.log("book mark Routes called");
  app.route("/bookmark").post(addBookMark).put(updateBookMarkById);
  app.route("/bookmarks").get(getBookMarkList);
  app
    .route("/bookmark/:userId")
    .get(getBookMarkById)
    .delete(deleteBookMarkById);
};

module.exports = { bookmarkRoutes };
