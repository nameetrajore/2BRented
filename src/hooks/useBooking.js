import { useState } from "react";

export const useBooking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getBookings = async (id, setBookings) => {
    const response = await fetch(`/api/bookings?customer=${id}`);

    const jsonRes = await response.json();

    if (response.ok) {
      setBookings(jsonRes);
    }
    setIsLoading(false);
  };

  return { isLoading, getBookings };
};
