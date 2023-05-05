import axios from "axios";

export const usePatchBike = () => {
  const patchBike = async (bike, booking) => {
    const { newBookingDates, alreadyBooked } = await getBookedDates(
      bike,
      booking
    );
    if (!alreadyBooked) {
      const responseBike = await axios.patch(`/api/bikes/${bike._id}`, {
        bookingDates: newBookingDates,
      });
    }
    //console.log("already booked", alreadyBooked);
    return alreadyBooked;
  };

  const getBookedDates = async (bike, booking) => {
    const responseGetBikes = await axios.get(`/api/bikes?_id=${bike._id}`);

    const dateArray = [];

    // Loop through each day between start and end date
    const currentDate = new Date(booking.pickupDate);
    while (currentDate <= new Date(booking.dropDate)) {
      // Add the current date to the arry
      dateArray.push(new Date(currentDate).toISOString());

      // Increment the current date
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const hasIntersection = dateArray.some((item) =>
      responseGetBikes.data[0].bookingDates.includes(item)
    );

    //console.log(dateArray, responseGetBikes.data[0].bookingDates, "hello");

    const alreadyBooked = hasIntersection;

    const newBookingDates =
      responseGetBikes.data[0].bookingDates.concat(dateArray);
    return { newBookingDates, alreadyBooked };
  };

  return { patchBike };
};
