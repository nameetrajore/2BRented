import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
import { useDispatch } from "react-redux";
import { authActions, ownerAuthActions } from "../app/store";

export const useLoginOwner = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  // const { dispatch } = useAuthContext();
  const dispatch = useDispatch();

  const login = async (ownerEmail, ownerPassword) => {
    setIsLoading(true);
    setError(null);
    // console.log(ownerEmail, "email");
    const response = await fetch(
      `http://localhost:4000/api/owners?ownerEmail=${ownerEmail}`
    );
    // console.log("hi");
    const jsonRes = await response.json();
    console.log(jsonRes, "this is it");

    if (!response.ok) {
      // console.log("incorrect email");
      setIsLoading(false);
      setError(jsonRes.error);
    }
    if (response.ok) {
      if (ownerPassword === jsonRes[0].ownerPassword) {
        // console.log("you are verified");
        //updating the auth context
        // dispatch({ type: "LOGIN", payload: jsonRes });
        // dispatch(authActions.setUser(jsonRes[0].ownerName));

        dispatch(ownerAuthActions.setOwner(jsonRes[0].ownerName));
        dispatch(ownerAuthActions.setOwnerId(jsonRes[0]._id));
        setError(jsonRes.error);
      }
    }
  };

  return { login, isLoading, error };
};