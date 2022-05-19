const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoDB", (err) => {
  if (!err) {
    console.log("connection succefull");
  } else {
    console.log("connection fail");
  }
});
module.exports = mongoose;
