import axios from "axios";
export const useDeleteBooking = () => {
  const deleteBooking = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/bookings/${id}`
    );
  };
  return { deleteBooking };
};
