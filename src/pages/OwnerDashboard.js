import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useGetRentedBikes } from "../hooks/useGetRentedBikes";
import { NavbarOwner } from "../components/NavbarOwner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { OwnerBikeCard } from "../components/OwnerBikeCard";

const OwnerDashboard = () => {
  const ownerId = useSelector((state) => state.ownerAuth.ownerId);
  const { getRented } = useGetRentedBikes();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    getRented(ownerId, setBikes);
  }, []);

  return (
    <>
      <NavbarOwner />
      <Box
        sx={{
          mt: 4,
          mb: 0,
          mx: 6,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" color="#00695c" fontWeight={500}>
          Uploaded Bikes
        </Typography>
      </Box>
      <Box pt={2} px={3}>
        <Grid container spacing={3}>
          {bikes.map((bike) => (
            <Grid item key={bike._id} md={12}>
              <OwnerBikeCard bike={bike} setBikes={setBikes} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default OwnerDashboard;
