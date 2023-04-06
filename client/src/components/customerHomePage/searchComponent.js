import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import customerHomePage1 from "../../resources/customerHomePage1.svg";
import Box from "@mui/material/Box";
import { Navigate, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { bookingActions } from "../../app/store";
const SearchComponent = () => {
  const dispatch = useDispatch();
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);
  const navigate = useNavigate();
  return (
    <Box bgcolor="transparent" p={10} mt={-35}>
      <Grid
        container
        /* color="linear-gradient(131deg, rgba(44,212,195,1) 19%, rgba(51,179,166,1) 41%, rgba(30,125,116,1) 82%)" */
        sx={{
          backgroundRepeat: "no-repeat",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" /* backgroundColor: (t) => */,
          /*   t.palette.mode === "light" */
          /*     ? t.palette.primary[100] */
          /*     : t.palette.grey[900], */
          backgroundSize: "20%",
          backgroundImage: `url(${customerHomePage1})`,
          backgroundColor: "white",
          borderRadius: 2,
          /* height: "50vh", */
          backgroundPosition: "right bottom",
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Box
            pt={5}
            pb={2}
            pl={8}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" fontWeight={500}>
              Search for your bike
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={3} pt={2} px={7}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              margin="none"
              required
              id="email"
              label="Pickup Location"
              name="email"
              value={pickupLocation}
              autoComplete="email"
              onChange={(event) => {
                dispatch(bookingActions.setPickupLocation(event.target.value));
              }}
            />
          </Grid>
          <Grid item xs={false} sm={false} md={3}>
            <TextField
              fullWidth
              margin="none"
              required
              id="email"
              value={dropLocation}
              onChange={(event) => {
                dispatch(bookingActions.setDropLocation(event.target.value));
              }}
              label="Drop Location"
              name="email"
              /* type="date" */
              autoComplete="Location"
            />
          </Grid>
          <Grid item xs={false} sm={false} md={6} />
          <Grid item xs={false} sm={false} md={2}>
            <TextField
              fullWidth
              margin="none"
              required
              id="email"
              value={pickupDate}
              onChange={(event) => {
                dispatch(bookingActions.setPickupDate(event.target.value));
              }}
              label="Pickup Date"
              name="email"
              /* type="date" */
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              margin="none"
              required
              id="email"
              label="Drop Date"
              value={dropDate}
              onChange={(event) => {
                dispatch(bookingActions.setDropDate(event.target.value));
              }}
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item md={8} />
          <Grid item xs={12} sm={8} md={1.5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("bike-catalogue")}
                size="large"
                sx={{ p: 1.5 }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Grid>
          {/* <Grid item xs={0} sm={0} md={8} /> */}
        </Grid>
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
            }}
          >
            {/* <Typography component="h1" variant="h3"> */}
            {/*   Category */}
            {/* </Typography> */}
          </Box>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: "20px",
          }}
        >
          {/* <CategoryCard categoryName={"bike"} /> */}
          {/* <CategoryCard categoryName={"bike"} /> */}
          {/* <CategoryCard categoryName={"bike"} /> */}
          {/* <CategoryCard categoryName={"bike"} /> */}
        </Box>
      </Grid>
    </Box>
  );
};

export default SearchComponent;
