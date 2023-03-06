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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="bike-catalouge" element={<BikeCatalouge />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="aadhar-verification" element={<AadharVeri />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
