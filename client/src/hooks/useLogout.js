import { authActions, fullAuthAction } from "../app/store";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.setUser(null));
    dispatch(fullAuthAction.setUserName(null))
    dispatch(authActions.setUser(""));
    dispatch(authActions.setId(-1));
  };
  return { logout };
};
