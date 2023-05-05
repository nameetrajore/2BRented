import { Navbar } from "../components/Navbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import customerHomePage1 from "../resources/customerHomePage1.svg";
import Box from "@mui/material/Box";
import { useNavigate, useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Invoice = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams
    .get("orderId")
    .substring(6, searchParams.get("orderId").length);
  return (
    <>
      <Navbar />
      {/* <DoneAllIcon /> */}
      <Box bgcolor="transparent" p={10} mt={3}>
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
              <Typography variant="h3" fontWeight={500} color="primary">
                Thank you!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={5}>
            <Box
              sx={{
                pl: 8,
                pb: 3,
              }}
            >
              <Typography component="h1" variant="h5">
                Your bike rental purchase was successful!
              </Typography>
              <Typography component="h1" variant="h5">
                Booking Id :{" "}
                <Typography component="span" variant="h5" fontWeight={700}>
                  {orderId}
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12} sx={{ pl: 8 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
              onClick={() => navigate("/my-bookings")}
            >
              See Booking Details
            </Button>
            <Button size="large" onClick={() => navigate("/")}>
              back to home
            </Button>
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
    </>
  );
};

export default Invoice;
