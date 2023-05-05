import { Navbar } from "../components/Navbar";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useBooking } from "../hooks/useBooking";
import { useSelector } from "react-redux";
import BookingComponent from "../components/bookingsPage/BookingComponent";

const Bookings = () => {
  const customerId = useSelector((state) => state.auth._id);
  const [bookings, setBookings] = useState([]);
  const { getBookings } = useBooking();
  useEffect(() => {
    getBookings(customerId, setBookings);
  }, []);
  return (
    <>
      <Navbar />
      <Box mt={2} px={40}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" color="primary" fontWeight={500}>
              Active Bookings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Grid
                container
                spacing={3}
                display="flex"
                direction="column-reverse"
              >
                {bookings ? (
                  bookings
                    .filter(
                      (booking) =>
                        new Date(new Date().toISOString().substring(0, 10)) <=
                        new Date(booking.startDate)
                    )
                    .map((booking) => {
                      return (
                        <BookingComponent
                          booking={booking}
                          key={Math.random()}
                          setBookings={setBookings}
                        />
                      );
                    })
                ) : (
                  <></>
                )}
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" color="gray" fontWeight={500}>
              Previous Bookings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Grid
                container
                spacing={3}
                display="flex"
                direction="column-reverse"
              >
                {bookings ? (
                  bookings
                    .filter(
                      (booking) =>
                        new Date(new Date().toISOString().substring(0, 10)) >
                        new Date(booking.startDate)
                    )
                    .map((booking) => {
                      return (
                        <BookingComponent
                          booking={booking}
                          key={Math.random()}
                          setBookings={setBookings}
                        />
                      );
                    })
                ) : (
                  <>
                    <Typography>No previous bookings.</Typography>
                  </>
                )}
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Bookings;
