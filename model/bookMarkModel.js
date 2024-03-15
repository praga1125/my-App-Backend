const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookMarkSchema = new Schema({
  userId: {
    type: String,
  },
  productId: {
    type: String,
  },
  uuid: {
    type: String,
  },
});

module.exports = {
  BookMarkSchema,
};
