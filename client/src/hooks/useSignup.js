import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../app/store";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  // const { dispatch } = useAuthContext()
  const dispatch = useDispatch();

  const signup = async (
    customerName,
    customerAddress,
    customerPhoneNumber,
    customerEmail,
    customerPassword,
    customerDrivingLicense
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName,
        customerAddress,
        customerPhoneNumber,
        customerEmail,
        customerPassword,
        customerDrivingLicense,
      }),
    });
    console.log("hi");
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //updating the auth context
      dispatch(authActions.setUser(json));
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
