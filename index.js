const express = require("express");
const app = express();
const port = 3000;
const { userRoutes } = require("./routes/userRoutes");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { bookmarkRoutes } = require("./routes/bookmarkRoutes");
const { productRoutes } = require("./routes/productRoutes");

app.use(cors());

//  mongo connection
mongoose.Promise = global.Promise;
const MONGODB_URI =
  "mongodb+srv://rpragacs:Vikipraga1125@cluster0.kv3528y.mongodb.net/sample?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

userRoutes(app);
productRoutes(app);
bookmarkRoutes(app);

app.get("/", (req, res) => {
  res.send("helloo over");
});

app.listen(port, () => {
  console.log("App running in port " + port);
});
