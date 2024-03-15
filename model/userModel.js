const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    // unique: true,
  },
  userName: {
    type: String,
    // default: null,
    // sparse: true,
  },
  location: {
    type: String,
    // default: null,
    // sparse: true,
  },
  lastLoginTime: {
    type: Date,
  },
});

module.exports = {
  UserSchema,
};
