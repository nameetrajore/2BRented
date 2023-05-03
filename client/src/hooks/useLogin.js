import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
import { useDispatch } from "react-redux";
import { authActions, fullAuthAction } from "../app/store";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const { dispatch } = useAuthContext();
  const dispatch = useDispatch();

  const login = async (customerEmail, customerPassword) => {
    setIsLoading(true);
    setError(null);
    // console.log(customerEmail, "email");
    const response = await fetch(
      `http://localhost:4000/api/customers?customerEmail=${customerEmail}`
    );
    // console.log("hi");
    const jsonRes = await response.json();
    // console.log(jsonRes, "this is it");

    if (!response.ok) {
      // console.log("incorrect email");
      setIsLoading(false);
      setError(jsonRes.error);
    }
    if (response.ok) {
      if (customerPassword === jsonRes[0].customerPassword) {
        // console.log("you are verified");
        //updating the auth context
        // dispatch({ type: "LOGIN", payload: jsonRes });
        dispatch(authActions.setUser(jsonRes[0].customerName));
        dispatch(authActions.setId(jsonRes[0]._id));
        // localStorage.setItem("user", jsonRes[0].customerName);
        // localStorage.setItem("_id", jsonRes[0]._id);
        setIsLoading(false);
      } else {
        // console.log("your password is wrong");
        setIsLoading(false);
        setError(jsonRes.error);
      }
    }
  };

  return { login, isLoading, error };
};