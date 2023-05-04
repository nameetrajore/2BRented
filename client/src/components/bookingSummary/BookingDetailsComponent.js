import * as React from "react";
import { Grid, Link, Typography } from "@mui/material";

const humanReadableDate = (inputDate) => {
  const dateStr = inputDate;

  // Create a new Date object using the date string
  const date = new Date(dateStr);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day of the month from the Date object
  const day = date.getDate();

  // Add the appropriate ordinal suffix to the day (e.g. 'st', 'nd', 'rd', or 'th')
  let dayStr;
  if (day === 1 || day === 21 || day === 31) {
    dayStr = day + "st";
  } else if (day === 2 || day === 22) {
    dayStr = day + "nd";
  } else if (day === 3 || day === 23) {
    dayStr = day + "rd";
  } else {
    dayStr = day + "th";
  }

  // Get the month index from the Date object and use it to look up the month name
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];

  // Get the year from the Date object
  const year = date.getFullYear();

  // Combine the day, month, and year into a human-readable string
  return `${dayStr} ${monthName}, ${year}`;
};

const BookingDetails = (props) => {
  const dropDate = props.dropDate;
  const dropLocation =
    props.dropLocation.substring(0, 1).toUpperCase() +
    props.dropLocation.substring(1, props.dropLocation.length);
  const pickupDate = props.pickupDate;
  const pickupLocation =
    props.pickupLocation.substring(0, 1).toUpperCase() +
    props.pickupLocation.substring(1, props.pickupLocation.length);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Typography variant="h5">Pickup Details</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6">
            From <span style={{ color: "#6C63FF" }}>{pickupLocation}</span> on{" "}
            <span style={{ color: "#6C63FF" }}>
              {humanReadableDate(pickupDate)}
            </span>{" "}
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h5">Drop Details</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6">
            To <span style={{ color: "#6C63FF" }}>{dropLocation}</span> on{" "}
            <span style={{ color: "#6C63FF" }}>
              {humanReadableDate(dropDate)}
            </span>{" "}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BookingDetails;
