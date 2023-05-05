import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ownerAuthActions } from "../app/store";

export const useLoginOwner = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (ownerEmail, ownerPassword) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/owner-login`, {
        ownerEmail,
        ownerPassword,
      });
      const owner = response.data.owner;
      dispatch(ownerAuthActions.setOwner(owner.ownerName));
      dispatch(ownerAuthActions.setOwnerId(owner._id));
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };
  return { login, isLoading, error };
};
