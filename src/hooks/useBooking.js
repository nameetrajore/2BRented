import { useState } from "react";

export const useBooking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getBookings = async (id, setBookings) => {
    const response = await fetch(
      `http://localhost:4000/api/bookings?customer=${id}`
    );

    const jsonRes = await response.json();
    // const responseBike = await fetch(`http://localhost:4000/api/bookings?_id=${jsonRes}`)

    if (response.ok) {
      setBookings(jsonRes);
    }
    setIsLoading(false);
  };

  return { isLoading, getBookings };
};
