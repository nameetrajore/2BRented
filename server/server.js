require("dotenv").config();

const express = require("express");
const routes = require("./routes/index");
const app = express();
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;
const db = mongoose.connection;
const cors = require("cors");
mongoose.set("strictQuery", true);
mongoose.connect(uri);

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(
  cors({
    origin: "http://localhost:3000", // replace with your client-side domain
  })
);

app.use(express.json());
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

app.listen(process.env.port || 4000, () => console.log("Server Started"));
