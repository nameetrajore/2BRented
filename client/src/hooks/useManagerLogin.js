import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions, fullAuthAction, managerAuthActions } from "../app/store";
export const useManagerLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (managerEmail, managerPassword) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:4000/api/manager-login`,
        {
          managerEmail,
          managerPassword,
        }
      );
      const manager = response.data.manager;
      dispatch(managerAuthActions.setManager(manager.managerName));
      dispatch(managerAuthActions.setManagerId(manager._id));
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  return { login, isLoading, error };
};
