import { Box, Button, CircularProgress, Chip, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import "./booking-style.css";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { bookingActions } from "../app/store";
import { useEffect, useState } from "react";
import { useGetBike } from "../hooks/useGetBike";
import ImageComponent from "../components/bookingSummary/ImageComponent";
import DetailsComponent from "../components/bookingSummary/DetailsComponent";
import ReviewComponent from "../components/bookingSummary/ReviewComponent";
import { usePayment } from "../hooks/usePayment";
import Footer from "../components/Footer";
import { usePatchBike } from "../hooks/usePatchBike";
import ErrorModal from "../components/bookingSummary/errorModal";

const BookingSummary = () => {
  const { checkout } = usePayment();
  const { patchBike } = usePatchBike();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const _id = useSelector((state) => state.auth._id);
  const booking = useSelector((state) => state.booking);
  const message = {
    message: "In order to rent a bike you need to login first.",
  };

  const checkoutHandler = async (amount) => {
    if (_id !== -1) {
      const alreadyBooked = await patchBike(bike, booking, setModal);
      if (!alreadyBooked) checkout(amount, bike, booking, setModal);
      else setModal(true);
    } else navigate(`/login?${createSearchParams(message)}`);
  };

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    dispatch(bookingActions.setDropLocation(searchParams.get("dropLocation")));
    dispatch(bookingActions.setPickupLocation(searchParams.get("pickupLocation")));
    dispatch(bookingActions.setDropDate(searchParams.get("dropDate")));
    dispatch(bookingActions.setPickupDate(searchParams.get("pickupDate")));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const { getBike, isLoading } = useGetBike();
  const { id } = useParams();

  useEffect(() => {
    getBike(id, setBike);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const numberOfDays =
    Math.floor(new Date(dropDate).getTime() - new Date(pickupDate).getTime()) /
    86400000;

  return (
    <>
      <Navbar />
      <ErrorModal modal={modal} setModal={setModal} />

      {/* Hero bar */}
      <Box
        sx={{
          height: "28vh",
          background: "linear-gradient(135deg, #154B46 0%, #1e7d74 45%, #33b3a6 100%)",
        }}
      />

      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box bgcolor="transparent" px={{ xs: 2, md: 10 }} mt={-22}>
            <Grid
              container
              sx={{
                backgroundColor: "white",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              {/* Bike image */}
              <Grid item xs={12} md={4}>
                <Box sx={{ height: { xs: 220, md: "100%" }, minHeight: 220 }}>
                  <img
                    src={bike.imageUrl[0]}
                    alt={`${bike.brand} ${bike.model}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              {/* Bike info */}
              <Grid item xs={12} md={8}>
                <Box p={4}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                    <Box>
                      <Typography variant="h4" fontWeight={700}>
                        {bike.brand} {bike.model}{" "}
                        <Typography component="span" variant="h5" color="text.secondary" fontWeight={400}>
                          {bike.year?.substring(0, 4)}
                        </Typography>
                      </Typography>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                        <LocationOnIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                        <Typography variant="body2" color="text.secondary">
                          {bike.locationCity}, {bike.locationState}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", gap: 1, mt: 1.5, flexWrap: "wrap" }}>
                        <Chip
                          icon={<LocalGasStationIcon />}
                          label={bike.fuelType}
                          size="small"
                          variant="outlined"
                        />
                        {bike.transmission && (
                          <Chip
                            icon={<SettingsIcon />}
                            label={bike.transmission}
                            size="small"
                            variant="outlined"
                          />
                        )}
                        <Chip
                          icon={<StarIcon />}
                          label={`${bike.rating} rating`}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      size="large"
                      onClick={() =>
                        checkoutHandler(numberOfDays * bike.dailyRate + 1000 + 100)
                      }
                      endIcon={<ArrowForward />}
                      sx={{ flexShrink: 0 }}
                    >
                      Proceed to Payment
                    </Button>
                  </Box>

                  <Box mt={3}>
                    <Typography variant="h6" color="text.secondary">
                      ₹{bike.dailyRate} / day
                    </Typography>
                    {numberOfDays > 0 && (
                      <Typography variant="h5" fontWeight={700} color="primary.main">
                        ₹{numberOfDays * bike.dailyRate + 1000 + 100} total for {numberOfDays} day{numberOfDays > 1 ? "s" : ""}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <ImageComponent bike={bike} />
          <DetailsComponent bike={bike} />
          <ReviewComponent bike={bike} />
          <Footer />
        </>
      )}
    </>
  );
};

export default BookingSummary;
