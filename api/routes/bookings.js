const prisma = require("../lib/prisma");

const postBooking = async (req, res) => {
  try {
    const booking = await prisma.booking.create({
      data: {
        ...req.body,
        startDate: new Date(req.body.startDate),
        endDate: new Date(req.body.endDate),
        totalAmount: parseFloat(req.body.totalAmount),
      },
    });
    res.status(201).json({ ...booking, _id: booking.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBooking = async (req, res) => {
  try {
    const where = {};
    if (req.query.customerId) where.customerId = req.query.customerId;
    if (req.query.bikeId) where.bikeId = req.query.bikeId;
    if (req.query.status) where.status = req.query.status;

    const bookings = await prisma.booking.findMany({ where });
    res.json(bookings.map((b) => ({ ...b, _id: b.id })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchBooking = () => {};

const deleteBooking = async (req, res) => {
  try {
    await prisma.booking.delete({ where: { id: req.params.id } });
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBooking, postBooking, patchBooking, deleteBooking };
