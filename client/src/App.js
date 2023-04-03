import { SearchPage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BikeCatalouge } from "./pages/BikeCatalogue";
import { Login } from "./pages/Login";
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { AadharVeri } from "./pages/AadharVeri";
import { NoMatch } from "./pages/NoMatch";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./app/store";
import BookingSummary from "./pages/BookingSummary";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // dispatch(authActions.setUser("nameet"));
  // console.log("inside app");
  // console.log(auth);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/"
          element={true ? <SearchPage /> : <Navigate to="/login" />}
        ></Route>
        <Route path="bike-catalogue" element={<BikeCatalouge />}></Route>
        <Route
          path="login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        ></Route>
        <Route path="aadhar-verification" element={<AadharVeri />} />
        <Route path="booking-summary" element={<BookingSummary />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      {/* <SearchPage /> */}
    </>
  );
}

export default App;
