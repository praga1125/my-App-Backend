const mongoose = require("mongoose");

const { BookMarkSchema } = require("../model/bookMarkModel");

const BookMark = mongoose.model("bookMark", BookMarkSchema);

const { v4: uuidv4 } = require("uuid");

const addBookMark = async (req, res) => {
  const { userId, productId } = req.body;

  const bookMark = new BookMark({
    userId,
    productId,
    uuid: uuidv4(),
  });

  console.log(bookMark);
  await bookMark.save();
  res.json(bookMark);
};

const getBookMarkList = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Default to limit 10 if not provided

  const skip = (page - 1) * limit;

  const bookMarkList = await BookMark.find({}).skip(skip).limit(limit).exec();

  res.json(bookMarkList);
};

const updateBookMarkById = async (req, res) => {
  const { userId } = req.body;
  const updatedBookMark = await BookMark.findOneAndUpdate(
    { userId },
    req.body,
    {
      upsert: true,
      new: true,
    }
  );
  console.log(updatedBookMark);
  res.json(updatedBookMark);
};

const getBookMarkById = async (req, res) => {
  const { userId } = req.params;
  console.log(req, "....");
  const bookmark = await BookMark.findOne({ userId });
  console.log(bookmark);
  res.json(bookmark);
};

const deleteBookMarkById = async (req, res) => {
  const { userId } = req.params;
  console.log(req, "....");
  const bookmark = await BookMark.deleteOne({ userId });
  console.log(bookmark);
  res.json(bookmark);
};

module.exports = {
  addBookMark,
  getBookMarkList,
  updateBookMarkById,
  getBookMarkById,
  deleteBookMarkById,
};
