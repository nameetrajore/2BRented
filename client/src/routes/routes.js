import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import { BikeCatalouge } from "../pages/BikeCatalogue";
import BookingSummary from "../pages/BookingSummary";
import { useSelector } from "react-redux";
import { SearchPage } from "../pages/HomePage";
import Login from "../pages/Login";
import { NoMatch } from "../pages/NoMatch";
import Signup from "../pages/Signup";
import Invoice from "../pages/Invoice";
import Bookings from "../pages/Bookings";
import Profile from "../pages/Profile";
import Support from "../pages/Support";

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/bike-catalogue" element={<BikeCatalouge />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
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
