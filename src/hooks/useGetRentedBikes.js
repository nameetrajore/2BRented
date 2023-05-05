import { useState } from "react";

export const useGetRentedBikes = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRented = async (ownerId, setBikes) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`/api/bikes?owner=${ownerId}`);
    const jsonRes = await response.json();
    setBikes(jsonRes);

    if (!response.ok) {
      // console.log("incorrect email");
      setIsLoading(true);
      setError(jsonRes.error);
    }
    if (response.ok) {
      setIsLoading(false);
    }
  };
  return { getRented, isLoading, error };
};
