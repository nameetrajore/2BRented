import { useState } from "react";

export const useGetBike = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getBike = async (id, setBike) => {
    setIsLoading(true);
    const responseBikes = await fetch(`/api/bikes?_id=${id}`);

    const jsonRes = await responseBikes.json();

    if (responseBikes.ok) {
      setBike(jsonRes[0]);
    }
    setIsLoading(false);
  };

  return { getBike, isLoading };
};
