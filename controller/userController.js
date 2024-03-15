const mongoose = require("mongoose");
const { MobileNumberSchema } = require("../model/mobileNumberModel");
const { UserSchema } = require("../model/userModel");
const MobileNumber = mongoose.model("mobileNumber", MobileNumberSchema);
const User = mongoose.model("user", UserSchema);
const { v4: uuidv4 } = require("uuid");

const createUser = async (req, res) => {
  const { userName, mobileNumber, location } = req.body;
  const userId = uuidv4();
  const user = new User({
    userId,
    userName,
    location,
    lastLoginTime: new Date(),
  });
  console.log("................... ", req.body);
  const phoneNumber = new MobileNumber({
    userId,
    mobileNumber,
  });

  console.log(user);
  await user.save();
  await phoneNumber.save();
  //  read transaction concept to handle above situation *
  res.json(user);
};

const getUserList = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Default to limit 10 if not provided
  const skip = (page - 1) * limit;
  try {
    const userList = await User.find({}).skip(skip).limit(limit).exec();
    res.json(userList);
  } catch (e) {
    console.error(e);
  }
};

const updateUserById = async (req, res) => {
  const { userId } = req.body;
  const updatedUser = await User.findOneAndUpdate({ userId }, req.body, {
    upsert: true,
    new: true,
  });
  console.log(updatedUser);
  res.json(updatedUser);
};

const getUserByMobileNumber = async (req, res) => {
  const { mobileNumber } = req.params;
  console.log(req);
  try {
    const user = await MobileNumber.findOne({ mobileNumber });
    console.log(user);
    res.json(user);
  } catch (e) {
    console.error(e);
  }
};

const getUserMobileNumber = async (req, res) => {
  const { uid } = req.params;
  try {
    const mobileNumber = await MobileNumber.findOne({ userId: uid });
    console.log(mobileNumber);
    res.json(mobileNumber);
  } catch (err) {
    console.log(err);
  }
};

const getUserByUid = async (req, res) => {
  const { uid } = req.params;
  console.log(req);
  try {
    const user = await User.findOne({ userId: uid });
    console.log(user);
    res.json(user);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  createUser,
  getUserList,
  updateUserById,
  getUserByMobileNumber,
  getUserByUid,
  getUserMobileNumber,
};
