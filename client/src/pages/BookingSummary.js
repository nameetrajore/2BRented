import { Box, Grid, Typography } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import dummyImg from "../resources/dummy.jpg";
import BookingDetailsComponent from "../components/bookingSummary/BookingDetailsComponent";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BookingSummary = () => {
  const params = useParams();
  // Send request to backend
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "30vh",
          width: "100vw",
          backgroundColor: "#33b3a6",
        }}
      />
      <Box bgcolor="transparent" p={10} mt={-35}>
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
              <Grid item m={3}>
                <img
                  src={dummyImg}
                  height="200px"
                  width="200px"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </Grid>
              <Grid item>
                <Grid container spacing={1} py={4}>
                  <Grid item md={12}>
                    <Typography variant="h3">Yamaha R200 2019</Typography>
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
                        <Typography variant="subtitle1" color="text.secondary">
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
                        <Typography variant="subtitle1" color="text.secondary">
                          Transmission
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
                        <Typography variant="subtitle1" color="text.secondary">
                          Fuel Type
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container mb={3} ml={3} mt={0} spacing={3}>
            <Grid item md={6}>
              <Grid container>
                <Grid item md={12}>
                  <Typography variant="h4">Booking Details</Typography>
                </Grid>
                <Grid item md={12}>
                  <BookingDetailsComponent />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookingSummary;
