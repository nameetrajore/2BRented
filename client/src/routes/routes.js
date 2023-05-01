import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import { BikeCatalouge } from "../pages/BikeCatalogue";
import BookingSummary from "../pages/BookingSummary";
import { useSelector } from "react-redux";
import { SearchPage } from "../pages/HomePage";
import Login from "../pages/Login";
import { NoMatch } from "../pages/NoMatch";
import Signup from "../pages/Signup";
import OwnerLogin from "../pages/OwnerLogin";
import OwnerDashboard from "../pages/OwnerDashboard"
import SignupOwner from "../pages/SignupOwner";
import AddBike1 from "../pages/AddBike1";
import AddBike2 from "../pages/AddBike2";
import AddBike3 from "../pages/AddBike3";
import AddBike4 from "../pages/AddBike4";
import Invoice from "../pages/Invoice";
import Bookings from "../pages/Bookings";
import Profile from "../pages/Profile";
import Support from "../pages/Support";

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.user);
  const owner = useSelector((state) => state.fullauth.userName);
  console.log("in routes",user)
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      
      <Route path="/sign-up-owner" element={!owner ? <SignupOwner /> : <Navigate to="/owner-dashboard" />}/>
      <Route path="/bike-catalogue" element={<BikeCatalouge />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/login-owner" element={!owner ? <OwnerLogin /> : <Navigate to="/owner-dashboard" />} />
      <Route path="/add-bike-1" element={<AddBike1/> }/>
      <Route path="/add-bike-2" element={<AddBike2/> }/>
      <Route path="/add-bike-3" element={<AddBike3/> }/>
      <Route path="/add-bike-4" element={<AddBike4/> }/>
      <Route path="/owner-dashboard" element={owner ? <OwnerDashboard/> : <OwnerLogin/>}/>
      <Route
        path="/sign-up"
        element={!user ? <Signup /> : <Navigate to="/" />}
      />
      <Route path="/booking-summary/:id" element={<BookingSummary />} />
      <Route path="/payment" element={<Invoice />} />
      <Route path="/my-bookings" element={<Bookings />} />
      <Route path="/profile" element=<Profile /> />
      <Route path="/support" element=<Support /> />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRoutes;
