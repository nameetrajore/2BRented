import axios from "axios";
export const useDeleteBooking = () => {
  const deleteBooking = async (id) => {
    await axios.delete(`/api/bookings/${id}`);
  };
  return { deleteBooking };
};
