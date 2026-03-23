require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/api", require(path.join(__dirname, "routes", "index.js")));

module.exports = app;
