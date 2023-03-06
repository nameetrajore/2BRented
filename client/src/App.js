import { SearchPage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BikeCatalouge } from "./pages/BikeCatalogue";
import { Login } from "./pages/Login";
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Signup } from "./pages/Signup";
import { AadharVeri } from "./pages/AadharVeri";
import { NoMatch } from "./pages/NoMatch";
import BikeCard from "./components/BikeCard";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { user } = useAuthContext()
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <SearchPage /> : <Navigate to = "/login"/>}></Route>
        <Route path="bike-catalouge" element={<BikeCatalouge />}></Route>
        <Route path="login" element={!user ? <Login /> : <Navigate to = "/"/>}></Route>
        <Route path="signup" element={!user ? <Signup /> : <Navigate to = "/"/>}></Route>
        <Route path="aadhar-verification" element={<AadharVeri />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
