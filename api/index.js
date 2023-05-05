require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;
const db = mongoose.connection;
const cors = require("cors");
const path = require("path");
mongoose.set("strictQuery", true);
mongoose.connect(uri, {});

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use("/api", require(path.join(__dirname, "routes", "index.js")));

module.exports = app;
