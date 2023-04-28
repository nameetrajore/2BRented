import { Grid, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDeleteBooking } from "../../hooks/useDeleteBooking";

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

const firstLetterUpperCase = (s) =>
  s.charAt(0).toUpperCase() + s.substring(1, s.length);

const BookingComponent = (props) => {
  const booking = props.booking;
  const setBookings = props.setBookings;
  const { deleteBooking } = useDeleteBooking();
  console.log(booking);
  return (
    <>
      <Grid
        item
        md={12}
        mt={3}
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 2,
        }}
      >
        <Grid
          container
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "20%",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 2,
            backgroundPosition: "right bottom",
          }}
        >
          <Grid item md={12} pl={1}>
            <Box>
              <Typography variant="h4" fontWeight={500}>
                {booking.bikeName}
              </Typography>
              <Typography component="h1" variant="h6">
                {firstLetterUpperCase(booking.pickupLocation)} to{" "}
                {firstLetterUpperCase(booking.dropLocation)}
              </Typography>
              <Typography component="h1" variant="h6">
                <span style={{ color: "#6C63FF" }}>
                  {humanReadableDate(booking.startDate)}
                </span>{" "}
                to{" "}
                <span style={{ color: "#6C63FF" }}>
                  {humanReadableDate(booking.endDate)}
                </span>
              </Typography>
              <Typography component="h1" variant="h6">
                Payment Id :{" "}
                {booking.paymentId.substring(6, booking.paymentId.length)}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12} mb={2}>
            <Button
              size="large"
              onClick={() => {
                deleteBooking(booking._id);
                setBookings((prevState) => {
                  return prevState.filter(
                    (removeBooking) => removeBooking._id !== booking._id
                  );
                });
              }}
              color="error"
            >
              Delete Booking
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BookingComponent;
