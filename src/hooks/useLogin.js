import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../app/store";
export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (customerEmail, customerPassword) => {
    setIsLoading(true);
    setError(false);
    try {
      console.log(process.env);
      const response = await axios.post(`/api/customer-login`, {
        customerEmail,
        customerPassword,
      });
      const customer = response.data.customer;
      dispatch(authActions.setUser(customer.customerName));
      dispatch(authActions.setId(customer._id));
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  return { login, isLoading, error };
};
