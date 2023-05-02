import axios from "axios";

export const usePatchBike = () => {
  const patchBike = async (bike, booking) => {
    const newBookingDates = await getBookedDates(bike, booking);
    console.log(newBookingDates);
    const responseBike = await axios.patch(
      `http://localhost:4000/api/bikes/${bike._id}`,
      { bookingDates: newBookingDates }
    );

    const patchBikeRes = await responseBike.json();
  };

  const getBookedDates = async (bike, booking) => {
    const responseGetBikes = await axios.get(
      `http://localhost:4000/api/bikes?_id=${bike._id}`
    );

    const bikeRes = await responseGetBikes.json();

    const dateArray = [];

    // Loop through each day between start and end date
    const currentDate = new Date(booking.pickupDate);
    while (currentDate <= new Date(booking.dropDate)) {
      // Add the current date to the arry
      dateArray.push(new Date(currentDate));

      // Increment the current date
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const newBookingDates = bikeRes[0].bookingDates.concat(dateArray);
    return newBookingDates;
  };

  return { patchBike };
};
