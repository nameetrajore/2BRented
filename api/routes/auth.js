const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Customer = require("../models/customers");
const Owner = require("../models/owners");
const Manager = require("../models/managers");

const customerSignup = async (req, res) => {
  try {
    const existingCustomer = await Customer.findOne({
      customerEmail: req.body.customerEmail,
    });

    if (existingCustomer) {
      return res.status(400).json({ message: "Customer Exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.customerPassword, 10);

    const result = await Customer.create({
      ...req.body,
      customerPassword: hashedPassword,
    });

    const accessToken = jwt.sign(
      { customerEmail: result.customerEmail, id: result._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ customer: result, accessToken: accessToken });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const customerLogin = async (req, res) => {
  try {
    const existingCustomer = await Customer.findOne({
      customerEmail: req.body.customerEmail,
    });

    if (!existingCustomer) {
      return res.status(400).json({ message: "Customer Not Found" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.customerPassword,
      existingCustomer.customerPassword
    );

    if (!matchPassword) {
      return res.status(400).json({ message: "Inavlid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        customerEmail: existingCustomer.customerEmail,
        id: existingCustomer._id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    res
      .status(200)
      .json({ customer: existingCustomer, accessToken: accessToken });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const managerSignup = async (req, res) => {
  try {
    const existingManager = await Manager.findOne({
      managerEmail: req.body.managerEmail,
    });

    if (existingManager) {
      return res.status(400).json({ message: "Manager Exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.managerPassword, 10);

    const result = await Manager.create({
      ...req.body,
      managerPassword: hashedPassword,
    });

    const accessToken = jwt.sign(
      { managerEmail: result.managerEmail, id: result._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const managerLogin = async (req, res) => {
  try {
    const existingManager = await Manager.findOne({
      managerEmail: req.body.managerEmail,
    });

    if (!existingManager) {
      return res.status(400).json({ message: "Manager Not Found" });
    }

    const matchPassword =
      req.body.managerPassword === existingManager.managerPassword;

    if (!matchPassword) {
      return res.status(400).json({ message: "Inavlid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        managerEmail: existingManager.managerEmail,
        id: existingManager._id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    res
      .status(200)
      .json({ manager: existingManager, accessToken: accessToken });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const ownerSignup = async (req, res) => {
  try {
    const existingOwner = await Owner.findOne({
      ownerEmail: req.body.ownerEmail,
    });

    if (existingOwner) {
      return res.status(400).json({ message: "Owner Exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.ownerPassword, 10);

    const result = await Owner.create({
      ...req.body,
      ownerPassword: hashedPassword,
    });

    const accessToken = jwt.sign(
      { ownerEmail: result.ownerEmail, id: result._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ owner: result, accessToken: accessToken });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const ownerLogin = async (req, res) => {
  try {
    const existingOwner = await Owner.findOne({
      ownerEmail: req.body.ownerEmail,
    });

    if (!existingOwner) {
      return res.status(400).json({ message: "Owner Not Found" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.ownerPassword,
      existingOwner.ownerPassword
    );

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        ownerEmail: existingOwner.ownerEmail,
        id: existingOwner._id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({ owner: existingOwner, accessToken: accessToken });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  customerSignup,
  customerLogin,
  managerLogin,
  managerSignup,
  ownerLogin,
  ownerSignup,
};
