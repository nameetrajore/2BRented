import { Grid, Typography, Box } from "@mui/material";
import React from "react";

export const NoMatch = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
      }}
    >
      <Grid item md={8} p={19}>
        <Typography variant="h3">
          Oops! The page you're looking for does not exist!
        </Typography>
      </Grid>
    </Grid>
  );
};
