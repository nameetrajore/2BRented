import { SearchPage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BikeCatalouge } from "./pages/BikeCatalogue";
import { Login } from "./pages/Login";
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Signup } from "./pages/Signup";
import AppRoutes from "./routes/routes";

function App() {
  return <AppRoutes />;
}

export default App;
