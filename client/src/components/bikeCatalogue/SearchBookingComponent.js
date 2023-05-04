import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CachedIcon from "@mui/icons-material/Cached";
import { bookingActions } from "../../app/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderBottom: 3,
  borderColor: "#ffea00",
};

const SearchBooking = (props) => {
  const dispatch = useDispatch();
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = useSelector((state) => state.filter);
  const booking = useSelector((state) => state.booking);
  const today = new Date();
  const [minPickupDate, setMinPickupDate] = useState(
    today.toISOString().substring(0, 10)
  );
  const [minDropDate, setMinDropDate] = useState(
    new Date(minPickupDate).toISOString().substring(0, 10)
  );

  const pickupDateHandler = (event) => {
    const nextDay = new Date();
    nextDay.setDate(new Date(event.target.value).getDate() + 1);
    if (event.target.value >= dropDate)
      dispatch(
        bookingActions.setDropDate(nextDay.toISOString().substring(0, 10))
      );
    dispatch(bookingActions.setPickupDate(event.target.value));
    setMinDropDate(nextDay.toISOString().substring(0, 10));
  };
  return (
    <>
      <Box
        m={5}
        borderBottom={2}
        maxWidth="500vh"
        pb={3}
        margin={0}
        padding={3}
        sx={{
          ...commonStyles,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="pickup-location"
              label="Pickup Location"
              value={pickupLocation}
              /* error={errorPickupLocation} */
              onChange={(event) => {
                dispatch(bookingActions.setPickupLocation(event.target.value));
              }}
              disabled
              name="pickup-location"
              autoComplete="location"
              variant="filled"
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="drop-location"
              label="Drop Location"
              value={dropLocation}
              /* error={errorDropLocation} */
              onChange={(event) => {
                dispatch(bookingActions.setDropLocation(event.target.value));
              }}
              disabled
              name="drop-location"
              autoComplete="location"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="pickup-date"
              label="Pickup Date"
              type="date"
              inputProps={{
                min: minPickupDate,
              }}
              value={pickupDate}
              onChange={pickupDateHandler}
              name="pickup-date"
              autoComplete="date"
              sx={{ width: 230 }}
              variant="filled"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="drop-date"
              label="Drop Date"
              type="date"
              inputProps={{
                min: minDropDate,
              }}
              value={dropDate}
              onChange={(event) => {
                dispatch(bookingActions.setDropDate(event.target.value));
              }}
              name="drop-date"
              autoComplete="date"
              variant="filled"
              sx={{ width: 230 }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="inherit"
              onClick={() => {
                if (pickupLocation !== "" && dropLocation !== "") {
                  let completeFilter = {};
                  if (props.applyFilter) completeFilter = booking;
                  else completeFilter = { ...filter, ...booking };
                  props.getBikes(completeFilter, props.setBikes);
                }
              }}
              sx={{ p: 1.9 }}
            >
              <CachedIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SearchBooking;
