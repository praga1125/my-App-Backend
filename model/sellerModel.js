const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SellerSchema = new Schema({
  sellerId: {
    type: String,
  },
  sellerName: {
    type: String,
  },
  photo: {
    type: String,
  },
  sellerMobileNumber: {
    type: Number,
  },
  model: {
    type: String,
  },
  brandName: {
    type: String,
  },
  price: {
    type: Number,
  },
  year: {
    type: Number,
  },
  cc: {
    type: Number,
  },
  milage: {
    type: Number,
  },
  kilometersDriven: {
    type: Number,
  },
  ownership: {
    type: Number,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  registrationNo: {
    type: String,
  },
  uid: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  insured: {
    type: Boolean,
  },
});

module.exports = {
  SellerSchema,
};
