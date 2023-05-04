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

// app.use(cors({
//     origin: 'http://localhost:4000',
//     methods: ['POST', 'PUT', 'PATCH', 'GET', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Origin', 'X-Api-Key', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
//   }));
app.use(cors({
    origin: 'http://localhost:3000', // replace with your client-side domain
  }));
  
app.use(express.json());
app.use("/api", routes);
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
//   });
app.listen(process.env.port || 4000, () => console.log("Server Started"));
