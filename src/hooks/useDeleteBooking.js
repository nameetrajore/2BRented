import axios from "axios";
export const useDeleteBooking = () => {
  const deleteBooking = async (id) => {
    const response = await axios.delete(`/api/bookings/${id}`);
  };
  return { deleteBooking };
};
