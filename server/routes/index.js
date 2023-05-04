const express = require("express");

const router = express.Router();
const bikes = require("./bikes");
const owners = require("./owners");
const customers = require("./customers");
const managers = require("./managers");
const checkout = require("../controllers/paymentController.js");
const bookings = require("./bookings");
const queries = require("./queries");
const auth = require("./auth");

// Bike Routes
router.get("/bikes", bikes.getBike);
router.post("/bikes", bikes.postBike);
router.patch("/bikes/:id", bikes.patchBike);
router.delete("/bikes/:id", bikes.deleteBike);

//Auth Routes
router.post("/customer-signup", auth.customerSignup);
router.post("/customer-login", auth.customerLogin);
router.post("/manager-signup", auth.managerSignup);
router.post("/manager-login", auth.managerLogin);
router.post("/owner-signup", auth.ownerSignup);
router.post("/owner-login", auth.ownerLogin);

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
router.get("/managers", managers.getManager);
router.post("/managers", managers.postManager);
router.put("/managers/:id", managers.putManager);
router.delete("/managers/:id", managers.deleteManager);

//Booking Routes
router.get("/bookings", bookings.getBooking);
router.post("/bookings", bookings.postBooking);
router.patch("/bookings/:id", bookings.patchBooking);
router.delete("/bookings/:id", bookings.deleteBooking);

// Payment Routes
router.post("/checkout", checkout.checkout);
router.get("/get-key", checkout.getkey);
router.post("/payment-verification", checkout.paymentVerification);

// Query Routes
router.post("/query", queries.postQuery);
router.get("/query", queries.getQuery);

module.exports = router;
