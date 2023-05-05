import axios from "axios";
import { useState } from "react";

export const useBikes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getBikes = async (setBikes) => {
    const bikes = await axios.get("/api/bikes");
    setBikes(bikes.data);
    setIsLoading(false);
  };

  const deleteBike = async (id) => {
    const response = await axios.delete(`/api/bikes/${id}`);
  };

  return { getBikes, deleteBike, isLoading };
};
