require("dotenv").config();

const express = require("express");
const routes = require("./routes/index");
const app = express();
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.set("strictQuery", true);
mongoose.connect(uri);

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use("/api", routes);

app.listen(process.env.port || 4000, () => console.log("Server Started"));
