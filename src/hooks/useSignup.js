import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../app/store";
export const useSignup = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
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

    const response = await fetch("/api/customer-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName,
        customerAddress,
        customerPhoneNumber,
        customerEmail,
        customerPassword,
        customerDrivingLicense,
        rating: 0,
      }),
    });

    const json = await response.json();
    //console.log(json);

    if (!response.ok) {
      setIsLoading(false);
      setError(true);
      window.alert(error); // display the error in a popup window
    }
    if (response.ok) {
      dispatch(authActions.setUser(customerName));
      dispatch(authActions.setId(json.customer._id));
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
