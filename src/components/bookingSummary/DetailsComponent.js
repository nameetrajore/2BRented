import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import BookingDetails from "./BookingDetailsComponent";
import { useSelector } from "react-redux";
const DetailsComponent = (props) => {
  const bike = props.bike;
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);

  const numberOfDays =
    Math.floor(new Date(dropDate).getTime() - new Date(pickupDate).getTime()) /
    86400000;

  return (
    <Box bgcolor="transparent" px={10} pt={3}>
      <Grid
        container
        sx={{
          backgroundColor: "white",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" /* backgroundColor: (t) => */,
          borderRadius: 2,
        }}
      >
        <Grid container pt={3}>
          <Grid item md={6}>
            <Grid container pl={3} pb={3}>
              <Grid
                container
                p={3}
                sx={{ backgroundColor: "#EFEFEF", borderRadius: 2 }}
              >
                <Grid item md={12}>
                  <Typography variant="h4" fontWeight={500} pb={1}>
                    Booking Details
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <BookingDetails
                    dropDate={dropDate}
                    dropLocation={dropLocation}
                    pickupDate={pickupDate}
                    pickupLocation={pickupLocation}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid container px={3} pb={3}>
              <Grid
                container
                p={3}
                sx={{ backgroundColor: "#EFEFEF", borderRadius: 2 }}
              >
                <Grid item md={12}>
                  <Typography variant="h4" fontWeight={500} pb={1}>
                    Cost Breakdown
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Grid container>
                    <Grid item sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">Rental Cost</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        ₹{bike.dailyRate * numberOfDays}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">Service Charges</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">₹100</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">Refundable Deposit</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">₹1000</Typography>
                    </Grid>
                  </Grid>
                  <Grid container pt={3}>
                    <Grid item sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" fontWeight={700}>
                        Total
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" fontWeight={700}>
                        ₹{numberOfDays * bike.dailyRate + 1000 + 100}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item md={6}> */}
          {/*   <Grid container px={3} pb={3} height="100%"> */}
          {/*     <Grid */}
          {/*       container */}
          {/*       p={3} */}
          {/*       sx={{ */}
          {/*         backgroundColor: "#EFEFEF", */}
          {/*         borderRadius: 2, */}
          {/*       }} */}
          {/*     > */}
          {/*       <Grid item md={12}> */}
          {/*         <Typography variant="h4" fontWeight={500}> */}
          {/*           Cost Breakdown */}
          {/*         </Typography> */}
          {/*       </Grid> */}
          {/*       <Grid item md={10} sx={{ flexGrow: 1 }} pl={2}> */}
          {/*         <Typography variant="h6" fontWeight={500}> */}
          {/*           Rental Cost */}
          {/*         </Typography> */}
          {/*       </Grid> */}
          {/*       <Grid item md={2}> */}
          {/*         <Typography variant="h6" fontWeight={500}> */}
          {/*           ₹1200 */}
          {/*         </Typography> */}
          {/*       </Grid> */}
          {/*     </Grid> */}
          {/*   </Grid> */}
          {/* </Grid> */}
          {/* <Grid item md={4}> */}
          {/*   <Grid container px={3} pb={3} height="100%"> */}
          {/*     <Grid */}
          {/*       container */}
          {/*       p={3} */}
          {/*       sx={{ backgroundColor: "#EFEFEF", borderRadius: 2 }} */}
          {/*     > */}
          {/*       <Grid item md={12}> */}
          {/*         <Typography variant="h5" fontWeight={500}> */}
          {/*           Reviews */}
          {/*         </Typography> */}
          {/*       </Grid> */}
          {/*       <Grid item mt={3} md={12} /> */}
          {/*       {/\* <Grid ml={4} item sx={{ flexGrow: 1 }}> *\/} */}
          {/*       {/\*   <Typography variant="h6" fontWeight={500}> *\/} */}
          {/*       {/\*     Rental Cost *\/} */}
          {/*       {/\*   </Typography> *\/} */}
          {/*       {/\* </Grid> *\/} */}
          {/*       {/\* <Grid item mr={4}> *\/} */}
          {/*       {/\*   <Typography variant="h6" fontWeight={500}> *\/} */}
          {/*       {/\*     ₹1200 *\/} */}
          {/*       {/\*   </Typography> *\/} */}
          {/*       {/\* </Grid> *\/} */}
          {/*     </Grid> */}
          {/*   </Grid> */}
          {/* </Grid> */}
          <Grid item md={12}>
            <Grid container px={3} pb={3} height="100%">
              <Grid
                container
                p={3}
                sx={{ backgroundColor: "#EFEFEF", borderRadius: 2 }}
              >
                <Grid item md={12} pb={1}>
                  <Typography variant="h4" fontWeight={500}>
                    Bike details
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item md={2}>
                    <Typography variant="h6">Brand</Typography>
                    <Typography>{bike.brand}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="h6">Mileage</Typography>
                    <Typography>
                      {bike.mileage}{" "}
                      {bike.transmission === "Electric" ? "kmpc" : "kmpl"}
                    </Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="h6">Kilometers Driven</Typography>
                    <Typography>{bike.kmsDriven} kms</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="h6">Bike Age</Typography>
                    <Typography>{bike.bikeAge} year</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="h6">Type</Typography>
                    <Typography>{bike.type}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="h6">Transmission</Typography>
                    <Typography>{bike.transmission}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsComponent;
