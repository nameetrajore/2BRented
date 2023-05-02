import { authActions, ownerAuthActions } from "../app/store";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(ownerAuthActions.setOwner(""));
    dispatch(ownerAuthActions.setOwnerId(-1));
    dispatch(authActions.setUser(""));
    dispatch(authActions.setId(-1));
  };
  return { logout };
};
