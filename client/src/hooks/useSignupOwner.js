import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../app/store";
import { useAuthContext } from "./useAuthContext";

export const useSignupOwner = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  // const { dispatch } = useAuthContext()
  const dispatch = useDispatch();

  const signup = async (
    ownerName,
    ownerAddress,
    ownerPhoneNumber,
    ownerEmail,
    ownerPassword,
    ownerRePassword,
  ) => {
    setIsLoading(true);
    setError(null);

    if (ownerRePassword !== ownerPassword) {
      setIsLoading(false);
      setError("Passwords do not match");
      window.alert(error); // display the error in a popup window
      return;
    }

    const response = await fetch("http://localhost:4000/api/owners", {
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
    
    console.log("hi");
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      window.alert(error); // display the error in a popup window
    }
    if (response.ok) {
      //updating the auth context
      console.log("done");
      console.log("This is the response",json);
      dispatch(authActions.setUser(json));
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
