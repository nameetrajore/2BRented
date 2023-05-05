require("dotenv").config();
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);

    res.status(201).json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const paymentVerification = async (req, res) => {
  console.log(res);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const crypto = require("crypto");
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  console.log("sig received ", razorpay_order_id);
  console.log("sig received ", razorpay_payment_id);
  //  console.log("sig generated " ,expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Save in Database
    // Redirect
    console.log("Payment is Authentic");
    res
      .status(201)
      .redirect(
        `/payment?success=true&orderId=${req.query.orderId}`
      );
  } else {
    res
      .status(201)
      .redirect(
        `/payment?success=true&orderId=${req.query.orderId}`
      );
  }
};

const getkey = async (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });

module.exports = {
  checkout,
  getkey,
  paymentVerification,
};
