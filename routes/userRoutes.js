const {
  createUser,
  getUserList,
  updateUserById,
  getUserByMobileNumber,
  getUserByUid,
  getUserMobileNumber,
} = require("../controller/userController");

const userRoutes = (app) => {
  console.log("user Routes called");
  app.route("/user").post(createUser).put(updateUserById);
  app.route("/users").get(getUserList);
  app.route("/user/mobile/:mobileNumber").get(getUserByMobileNumber);
  app.route("/mobile/:uid").get(getUserMobileNumber);
  app.route("/user/:uid").get(getUserByUid);
};

module.exports = { userRoutes };
