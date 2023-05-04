import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ConstructionIcon from "@mui/icons-material/Construction";
import "./booking-style.css";
import PersonIcon from "@mui/icons-material/Person";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BookingSummary = (props) => {
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [bike, setBike] = useState(null);
  useEffect(() => {
    dispatch(bookingActions.setDropLocation(searchParams.get("dropLocation")));
    dispatch(
      bookingActions.setPickupLocation(searchParams.get("pickupLocation"))
    );
    dispatch(bookingActions.setDropDate(searchParams.get("dropDate")));
    dispatch(bookingActions.setPickupDate(searchParams.get("pickupDate")));
  }, []);
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const { getBike, isLoading } = useGetBike();
  const { id } = useParams();
  useEffect(() => {
    getBike(id, setBike);
  }, []);
  const numberOfDays =
    Math.floor(new Date(dropDate).getTime() - new Date(pickupDate).getTime()) /
    86400000;
  // Send request to backend
  return (
    <>
      <Navbar />
      <ErrorModal modal={modal} setModal={setModal} />
      <Box
        sx={{
          height: "30vh",
          backgroundColor: "#33b3a6",
        }}
      />
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: "-50px 0px 0px -50px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box bgcolor="transparent" pt={10} px={10} mt={-35}>
            <Grid
              container
              sx={{
                backgroundColor: "white",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" /* backgroundColor: (t) => */,
                borderRadius: 2,
              }}
            >
              <Grid item md={12}>
                <Grid container spacing={3}>
                  <Grid item md={1.8}>
                    <Box ml={3} mt={3} mb={3}>
                      <img
                        src={bike.imageUrl[0]}
                        alt="Bike Image"
                        height="200px"
                        width="100%"
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={10.2}>
                    <Grid container spacing={1} py={4}>
                      <Grid item sx={{ flexGrow: 1 }}>
                        <Typography variant="h3">
                          {bike.brand} {bike.model}
                          <span color="#C071FF">
                            {" "}
                            {bike.year.substring(0, 4)}
                          </span>
                        </Typography>
                      </Grid>
                      <Grid item px={3}>
                        <Button
                          variant="contained"
                          size="large"
                          onClick={() =>
                            checkoutHandler(
                              numberOfDays * bike.dailyRate + 1000 + 100
                            )
                          }
                          endIcon={<ArrowForward />}
                        >
                          Proceed to Payment
                        </Button>
                      </Grid>
                      <Grid item md={12}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <AirlineSeatReclineNormalIcon color="action" />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                            >
                              2 seats
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={12}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <ConstructionIcon color="action" />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                            >
                              {bike.transmission}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={12}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <LocalGasStationIcon color="action" />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                            >
                              {bike.fuelType}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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
