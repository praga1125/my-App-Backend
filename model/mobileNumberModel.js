const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MobileNumberSchema = new Schema({
  userId: {
    type: String,
    unique: true,
  },
  mobileNumber: {
    type: Number,
    unique: true,
  },
});

module.exports = {
  MobileNumberSchema,
};
