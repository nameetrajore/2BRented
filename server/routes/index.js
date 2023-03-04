const express = require("express");

const router = express.Router();
const bikes  = require("./bikes");
const owners = require("./owners");
const customers = require("./customers");
const admins = require("./admins");

// Bike Routes
router.get("/bikes", bikes.getBike);
router.post("/bikes", bikes.postBike);
router.put("/bikes/:id", bikes.putBike);
router.delete("/bikes/:id", bikes.deleteBike);

// Owner Routes
router.get("/owners", owners.getOwner);
router.post("/owners", owners.postOwner);
router.put("/owners/:id", owners.putOwner);
router.delete("/owners/:id", owners.deleteOwner);

// Customer Routes
router.get("/customers", customers.getCustomer);
router.post("/customers", customers.postCustomer);
router.put("/customers/:id", customers.putCustomer);
router.delete("/customers/:id", customers.deleteCustomer);

// Admin Routes
router.get("/admins", admins.getAdmin);
router.post("/admins", admins.postAdmin);
router.put("/admins/:id", admins.putAdmin);
router.delete("/admins/:id", admins.deleteAdmin);

module.exports = router;
