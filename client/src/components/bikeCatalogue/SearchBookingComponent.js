import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CachedIcon from "@mui/icons-material/Cached";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { bookingActions } from "../../app/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderBottom: 3,
  borderColor: "#ffea00",
};

const SearchBooking = () => {
  const dispatch = useDispatch();
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);
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
              onChange={(event) => {
                dispatch(bookingActions.setPickupLocation(event.target.value));
              }}
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
              onChange={(event) => {
                dispatch(bookingActions.setDropLocation(event.target.value));
              }}
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
              value={pickupDate}
              onChange={(event) => {
                dispatch(bookingActions.setPickupDate(event.target.value));
              }}
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
              /* onClick={() => navigate("/bike-catalogue")} */
              size="large"
              color="inherit"
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
