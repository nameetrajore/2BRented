import axios from "axios";
import { useState } from "react";
export const useOwners = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getOwners = async (setOwners) => {
    const owners = await axios.get("http://localhost:4000/api/owners");
    setOwners(owners.data);
    setIsLoading(false);
  };

  const deleteOwner = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/owners/${id}`
    );
  };
  return { getOwners, deleteOwner, isLoading };
};
