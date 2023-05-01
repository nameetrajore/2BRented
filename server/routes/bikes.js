const Bike = require("../models/bikes");

const postBike = async (req, res) => {
  const bike = new Bike({ ...req.body });
  // Hello
  try {
    const newBike = await bike.save();
    res.status(201).json(newBike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBike = async (req, res) => {
  const incomingQuery = req.query;
  // console.log(incomingQuery);
  const outgoingQuery = { ...incomingQuery };

  delete outgoingQuery.priceHigh;
  delete outgoingQuery.priceLow;
  delete outgoingQuery.rating;
  delete outgoingQuery.bikeAge;
  delete outgoingQuery.kmsDriven;
  delete outgoingQuery.pickupLocation;

  if (incomingQuery.priceHigh && incomingQuery.priceLow) {
    outgoingQuery.dailyRate = {
      $gte: incomingQuery.priceLow,
      $lte: incomingQuery.priceHigh,
    };
  }

  if (incomingQuery.rating) {
    outgoingQuery.rating = {
      $gte: incomingQuery.rating,
    };
  }

  if (incomingQuery.bikeAge) {
    outgoingQuery.bikeAge = {
      $lte: incomingQuery.bikeAge,
    };
  }

  if (incomingQuery.kmsDriven) {
    outgoingQuery.kmsDriven = {
      $lte: incomingQuery.kmsDriven,
    };
  }

  if (incomingQuery.pickupLocation && incomingQuery.pickupLocation != "") {
    outgoingQuery["location.city"] = {
      $regex: new RegExp(incomingQuery.pickupLocation),
      $options: "i",
    };
  }

  const dateArray = [];

  // Loop through each day between start and end date
  const currentDate = new Date(incomingQuery.pickupDate);
  while (currentDate <= new Date(incomingQuery.dropDate)) {
    // Add the current date to the array
    dateArray.push(new Date(currentDate));

    // Increment the current date
    currentDate.setDate(currentDate.getDate() + 1);
  }

  outgoingQuery.bookingDates = {
    $not: {
      $elemMatch: {
        $in: dateArray,
      },
    },
  };

  console.log(outgoingQuery, dateArray);
  try {
    const bikes = await Bike.find(outgoingQuery);

    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchBike = async (req, res) => {
  try {
    const bike = await Bike.updateOne(
      { _id: req.params.id },
      { $set: req.query }
    );
    res.json(bike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBike = (req, res) => {
  res.send({ type: "DELETE" });
};

module.exports = {
  getBike,
  postBike,
  patchBike,
  deleteBike,
};
