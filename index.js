const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db.js");
const routes = require("./routes/routes.js");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.listen(3100, () => {
  console.log("Server started at port :3100");
});
// base path:http://localhost:3100/employee
app.use("/employee", routes);
