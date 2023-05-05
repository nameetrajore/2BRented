import { useState } from "react";
import { useDispatch } from "react-redux";
import { ownerAuthActions } from "../app/store";

export const useSignupOwner = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();

  const signup = async (
    ownerName,
    ownerAddress,
    ownerPhoneNumber,
    ownerEmail,
    ownerPassword
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/owner-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ownerName,
        ownerAddress,
        ownerPhoneNumber,
        ownerEmail,
        ownerPassword,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(true);
      window.alert("Error"); // display the error in a popup window
    }
    if (response.ok) {
      dispatch(ownerAuthActions.setOwner(ownerName));
      dispatch(ownerAuthActions.setOwnerId(json.owner._id));
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
