import React from "react";
import SearchComponent from "../components/customerHomePage/searchComponent";
import ShieldIcon from "@mui/icons-material/Shield";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import { Navbar } from "../components/Navbar";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer";

export const SearchPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "30vh",
          width: "100%",
          backgroundColor: "#33b3a6",
        }}
      />
      <SearchComponent />
      <Grid container p={3}>
        <Grid item md={12}>
          <Grid container justifyContent="center" alignItems="center" pb={4}>
            <Grid item>
              <Typography
                variant="h3"
                fontWeight={500}
                color="#154B46"
                fontStyle="italic"
              >
                {" "}
                How it works?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
          px={13}
        >
          <Grid item md={3}>
            <Box
              boxShadow="#DFF3F1 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={3}
              sx={{
                backgroundColor: "#DFF3F1",
              }}
            >
              <Grid container>
                <Grid item md={12} pt={5} pl={4}>
                  <AccessTimeIcon
                    sx={{ transform: "scale(2)", color: "#154B46" }}
                  />
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    color="#154B46"
                  >
                    Book for a minimum duration of 24 hours.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              boxShadow="#DFF3F1 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={3}
              sx={{
                backgroundColor: "#DFF3F1",
              }}
            >
              <Grid container>
                <Grid item md={12} pt={5} pl={4}>
                  <LocalAtmIcon
                    sx={{ transform: "scale(2)", color: "#154B46" }}
                  />
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    color="#154B46"
                  >
                    Pay a refundable security deposit.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              boxShadow="#DFF3F1 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={3}
              sx={{
                backgroundColor: "#DFF3F1",
              }}
            >
              <Grid container>
                <Grid item md={12} pt={5} pl={4}>
                  <LocationCityIcon
                    sx={{ transform: "scale(2)", color: "#154B46" }}
                  />
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    color="#154B46"
                  >
                    Rent a vehicle in your neighbourhood.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              boxShadow="#DFF3F1 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={3}
              sx={{
                backgroundColor: "#DFF3F1",
              }}
            >
              <Grid container>
                <Grid item md={12} pt={5} pl={4}>
                  <TwoWheelerIcon
                    sx={{ transform: "scale(2)", color: "#154B46" }}
                  />
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    color="#154B46"
                  >
                    Enjoy the smoooooth ride!
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid container p={3} mt={6}>
        <Grid item md={12}>
          <Grid container justifyContent="center" alignItems="center" pb={4}>
            <Grid item>
              <Typography
                variant="h3"
                fontWeight={500}
                color="#154B46"
                fontStyle="italic"
              >
                {" "}
                Why 2BRented?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
          px={13}
        >
          <Grid item md={3}>
            <Box
              boxShadow="#D2CFFF 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={5}
              p={4}
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item py={10} pb={7}>
                  <Avatar sx={{ bgcolor: "#D2CFFF", transform: "scale(4)" }}>
                    <ShieldIcon sx={{ color: "#6C63FF" }} />
                  </Avatar>
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    align="center"
                    color="#154B46"
                  >
                    Your rides are protected by 2BRented
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              boxShadow="#D2CFFF 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={5}
              p={4}
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item py={10} pb={7}>
                  <Avatar sx={{ bgcolor: "#D2CFFF", transform: "scale(4)" }}>
                    <LocalAtmIcon sx={{ color: "#6C63FF" }} />
                  </Avatar>
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    align="center"
                    color="#154B46"
                  >
                    Bike pickup from a nearby location.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              boxShadow="#D2CFFF 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              borderRadius={5}
              p={4}
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item py={10} pb={7}>
                  <Avatar sx={{ bgcolor: "#D2CFFF", transform: "scale(4)" }}>
                    <SportsMotorsportsIcon sx={{ color: "#6C63FF" }} />
                  </Avatar>
                </Grid>
                <Grid item md={12} p={3}>
                  <Typography
                    variant="h4"
                    fontSize={27}
                    fontWeight={500}
                    align="center"
                    color="#154B46"
                  >
                    Free usage of bikes of upto 150km*
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
