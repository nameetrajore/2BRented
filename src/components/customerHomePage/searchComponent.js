import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { createSearchParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { bookingActions } from "../../app/store";
import { useState } from "react";

const cities = ["Mumbai", "Bangalore", "Hyderabad", "Delhi", "Chennai", "Jaipur"];

const SearchComponent = () => {
  const dispatch = useDispatch();
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);
  const params = { dropLocation, pickupLocation, dropDate, pickupDate };
  const [errorPickupLocation, setErrorPickupLocation] = useState(false);
  const [errorDropLocation, setErrorDropLocation] = useState(false);
  const today = new Date();
  const [minPickupDate] = useState(today.toISOString().substring(0, 10));
  const [minDropDate, setMinDropDate] = useState(
    new Date(minPickupDate).toISOString().substring(0, 10)
  );

  const pickupDateHandler = (event) => {
    const nextDay = new Date();
    nextDay.setDate(new Date(event.target.value).getDate() + 1);
    if (event.target.value >= dropDate)
      dispatch(bookingActions.setDropDate(nextDay.toISOString().substring(0, 10)));
    dispatch(bookingActions.setPickupDate(event.target.value));
    setMinDropDate(nextDay.toISOString().substring(0, 10));
  };

  const navigate = useNavigate();

  return (
    /* Pull card up into hero with negative margin; zIndex sits above gradient */
    <Box sx={{ mt: "-110px", position: "relative", zIndex: 2, pb: 1 }}>
      <Container maxWidth="lg">
        {/* White search card — 72% wide on large screens, full width on mobile */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            px: { xs: 3, md: 5 },
            py: 4,
          }}
        >
          <Typography variant="h5" fontWeight={600} color="#154B46" mb={3}>
            Search for your Bike
          </Typography>

          {/* Single row on md+: (3) + (3) + (2) + (2) + (2) = 12 columns */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                required
                select
                id="pickup-location"
                label="Pickup Location"
                name="pickupLocation"
                value={pickupLocation}
                error={errorPickupLocation}
                helperText={errorPickupLocation ? "Required" : ""}
                onChange={(e) =>
                  dispatch(bookingActions.setPickupLocation(e.target.value))
                }
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                required
                select
                id="drop-location"
                label="Drop Location"
                name="dropLocation"
                value={dropLocation}
                error={errorDropLocation}
                helperText={errorDropLocation ? "Required" : ""}
                onChange={(e) =>
                  dispatch(bookingActions.setDropLocation(e.target.value))
                }
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                required
                id="pickup-date"
                label="Pickup Date"
                name="pickupDate"
                type="date"
                value={pickupDate}
                inputProps={{ min: minPickupDate }}
                onChange={pickupDateHandler}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                required
                id="drop-date"
                label="Drop Date"
                name="dropDate"
                type="date"
                value={dropDate}
                inputProps={{ min: minDropDate }}
                onChange={(e) =>
                  dispatch(bookingActions.setDropDate(e.target.value))
                }
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  if (dropLocation === "") setErrorDropLocation(true);
                  else setErrorDropLocation(false);
                  if (pickupLocation === "") setErrorPickupLocation(true);
                  else setErrorPickupLocation(false);
                  if (pickupLocation !== "" && dropLocation !== "") {
                    navigate(`bike-catalogue?${createSearchParams(params)}`);
                  }
                }}
                size="large"
                sx={{ py: 1.8, whiteSpace: "nowrap" }}
                endIcon={<ArrowForwardIcon />}
              >
                Find Bike
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchComponent;
