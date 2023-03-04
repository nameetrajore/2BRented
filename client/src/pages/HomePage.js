import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
// import CategoryCard from "../components/CategoryCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Grid item xs={12} sm={12} md={12} component={Paper} square elevation={0}>
        <Box
          pt={5}
          pl={8}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h3">
            Search for your bike
          </Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} pt={2} px={7}>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Pickup Location"
            name="email"
            autoComplete="email"
            autoFocus

          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Drop Location"
            name="email"
            autoComplete="Location"
            autoFocus
          />
        </Grid>
        <Grid item xs={0} sm={0} md={8} padding={{xs:0, sm:0}}/>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Pickup Date"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Drop Date"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={0} sm={0} md={8} />
      </Grid>
      <Grid container my={0} px={7} pt={2}>
        <Grid item xs={12} sm={8} md={1} component={Paper} square elevation={0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              variant="contained"
              sx={{ mb: 1, mt: 1 }}
              onClick={() => navigate("bike-catalouge")}
              size="large"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} square elevation={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "20px",
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
  );
};
