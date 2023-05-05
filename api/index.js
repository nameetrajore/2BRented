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

// if (process.env.NODE_ENV === "production") {
//   app.get("/", (req, res) => {
//     // app.use(
//     //   cors({
//     //     origin: path.resolve(__dirname, "..", "client", "build", "index.html"), // replace with your client-side domain
//     //   })
//     // );
//     app.use(express.static(path.join(__dirname, "..", "client", "build")));
//     res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
//   });
// }

// app.listen(process.env.port || 4000, () => console.log("Server Started"));

module.exports = app;
