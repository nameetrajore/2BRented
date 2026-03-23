const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../lib/prisma");

const customerSignup = async (req, res) => {
  try {
    const existingCustomer = await prisma.customer.findUnique({
      where: { customerEmail: req.body.customerEmail },
    });

    if (existingCustomer) {
      return res.status(400).json({ message: "Customer Exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.customerPassword, 10);

    const result = await prisma.customer.create({
      data: {
        ...req.body,
        customerPassword: hashedPassword,
        locationPincode: parseInt(req.body.locationPincode || 0),
        rating: parseFloat(req.body.rating || 0),
      },
    });

    const accessToken = jwt.sign(
      { customerEmail: result.customerEmail, id: result.id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ customer: { ...result, _id: result.id }, accessToken });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const customerLogin = async (req, res) => {
  try {
    const existingCustomer = await prisma.customer.findUnique({
      where: { customerEmail: req.body.customerEmail },
    });

    if (!existingCustomer) {
      return res.status(400).json({ message: "Customer Not Found" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.customerPassword,
      existingCustomer.customerPassword
    );

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      { customerEmail: existingCustomer.customerEmail, id: existingCustomer.id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      customer: { ...existingCustomer, _id: existingCustomer.id },
      accessToken,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const managerSignup = async (req, res) => {
  try {
    const existingManager = await prisma.manager.findFirst({
      where: { managerEmail: req.body.managerEmail },
    });

    if (existingManager) {
      return res.status(400).json({ message: "Manager Exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.managerPassword, 10);

    const result = await prisma.manager.create({
      data: { ...req.body, managerPassword: hashedPassword },
    });

    const accessToken = jwt.sign(
      { managerEmail: result.managerEmail, id: result.id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const managerLogin = async (req, res) => {
  try {
    const existingManager = await prisma.manager.findFirst({
      where: { managerEmail: req.body.managerEmail },
    });

    if (!existingManager) {
      return res.status(400).json({ message: "Manager Not Found" });
    }

    const matchPassword = await bcrypt.compare(
      req.body.managerPassword,
      existingManager.managerPassword
    );

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      { managerEmail: existingManager.managerEmail, id: existingManager.id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      manager: { ...existingManager, _id: existingManager.id },
      accessToken,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const ownerSignup = async (req, res) => {
  try {
    const existingOwner = await prisma.owner.findFirst({
      where: { ownerEmail: req.body.ownerEmail },
    });

    if (existingOwner) {
      return res.status(400).json({ message: "Owner Exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.ownerPassword, 10);

    const result = await prisma.owner.create({
      data: {
        ...req.body,
        ownerPassword: hashedPassword,
        locationPincode: parseInt(req.body.locationPincode || 0),
      },
    });

    const accessToken = jwt.sign(
      { ownerEmail: result.ownerEmail, id: result.id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ owner: { ...result, _id: result.id }, accessToken });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const ownerLogin = async (req, res) => {
  try {
    const existingOwner = await prisma.owner.findFirst({
      where: { ownerEmail: req.body.ownerEmail },
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
      { ownerEmail: existingOwner.ownerEmail, id: existingOwner.id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      owner: { ...existingOwner, _id: existingOwner.id },
      accessToken,
    });
  } catch (err) {
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
