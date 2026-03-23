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
        locationCity: customerAddress.city,
        locationState: customerAddress.state,
        locationPincode: parseInt(customerAddress.pincode) || 0,
        locationAddress: customerAddress.address,
        customerPhoneNumber: String(customerPhoneNumber),
        customerEmail,
        customerPassword,
        customerDrivingLicense,
        rating: 0,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(true);
      window.alert(json.message || "Signup failed");
    }
    if (response.ok) {
      dispatch(authActions.setUser(customerName));
      dispatch(authActions.setId(json.customer._id));
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
