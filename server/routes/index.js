const express = require("express");

const router = express.Router();
const bikes = require("./bikes");
const owners = require("./owners");
const customers = require("./customers");
const admins = require("./admins");
const checkout = require("../controllers/paymentController.js");
const bookings = require("./bookings");

// Bike Routes
router.get("/bikes", bikes.getBike);
router.post("/bikes", bikes.postBike);
router.patch("/bikes/:id", bikes.patchBike);
router.delete("/bikes/:id", bikes.deleteBike);

// Owner Routes
router.get("/owners", owners.getOwner);
router.post("/owners", owners.postOwner);
router.put("/owners/:id", owners.putOwner);
router.delete("/owners/:id", owners.deleteOwner);

// Customer Routes
router.get("/customers", customers.getCustomer);
router.post("/customers", customers.postCustomer);
router.patch("/customers/:id", customers.patchCustomer);
router.delete("/customers/:id", customers.deleteCustomer);

// Admin Routes
router.get("/admins", admins.getAdmin);
router.post("/admins", admins.postAdmin);
router.put("/admins/:id", admins.putAdmin);
router.delete("/admins/:id", admins.deleteAdmin);

//Booking Routes
router.get("/bookings", bookings.getBooking);
router.post("/bookings", bookings.postBooking);
router.patch("/bookings/:id", bookings.patchBooking);
router.delete("/bookings/:id", bookings.deleteBooking);

// Payment Routes
router.post("/checkout", checkout.checkout);
router.get("/get-key", checkout.getkey);
router.post("/payment-verification", checkout.paymentVerification);

module.exports = router;
