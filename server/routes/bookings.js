const Booking = require("../models/bookings");

const postBooking = async (req, res) => {
  const booking = new Booking({ ...req.body });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err.message);
  }
};

const getBooking = async (req, res) => {
  try {
    const bookings = await Booking.find(req.query);
    res.json(bookings);
    console.log(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchBooking = () => {};

const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.deleteOne({ _id: req.params.id });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBooking,
  postBooking,
  patchBooking,
  deleteBooking,
};
