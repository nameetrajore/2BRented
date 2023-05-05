import axios from "axios";
import { useState } from "react";

export const useBikes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getBikes = async (setBikes) => {
    const bikes = await axios.get("http://localhost:4000/api/bikes");
    setBikes(bikes.data);
    setIsLoading(false);
  };

  const deleteBike = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/bikes/${id}`
    );
  };

  return { getBikes, deleteBike, isLoading };
};
