import { SearchPage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BikeCatalouge } from "./pages/BikeCatalogue";
import { Login } from "./pages/Login";
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Signup } from "./pages/Signup";
import AppRoutes from "./routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./app/store";

function App() {
  // to persist login status on reload or browser shut down
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      dispatch(authActions.setUser(loggedInUser));
    }
  }, []);

  return <AppRoutes />;
}

export default App;
