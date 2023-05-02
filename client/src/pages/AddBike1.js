import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavbarOwner } from "../components/NavbarOwner";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

export const AddBike1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const owner = useSelector((state) => state.ownerAuth.owner);

  return (
    <>
      <NavbarOwner />
      <Grid
        alignItems="center"
        justifyContent="center"
        spacing={3}
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
        p={9}
      >
        <Box
          component="form"
          noValidate
          sx={{
            height: "100%",
            px: 4,
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 500,
            boxShadow: 5,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontStyle: "italic",
              fontWeight: "bold",
            }}
            pb={2}
            color="#154B46"
          >
            {" "}
            Personal Details
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              fontWeight: "bold",
            }}
            pb={5}
          >
            {" "}
            Verify if it's you
          </Typography>
          <Grid
            alignItems="center"
            justifyContent="center"
            spacing={3}
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <CssBaseline />
            <Box component="form" noValidate sx={{ mt: 4 }}>
              <Grid
                container
                spacing={3}
                alignItems="center"
                align="center"
                justifyContent="center"
              >
                <Grid item md={12}>
                  <TextField
                    required
                    style={{ textAlign: "center", width: 300 }}
                    disabled={true}
                    sx={{ ml: 3 }}
                    value={owner}
                    id="owner"
                    label="Name"
                    name="owner"
                    autoFocus
                    color="secondary"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    required
                    sx={{ ml: 3, width: 300 }}
                    disabled={true}
                    id="phNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    autoFocus
                    color="secondary"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    required
                    sx={{ ml: 3, width: 300 }}
                    disabled={true}
                    id="userEmailId"
                    label="Email"
                    name="email"
                    autoFocus
                    color="secondary"
                  />
                </Grid>
                <Grid item md={12}>
                  <Button
                    item
                    onClick={() => {
                      navigate("/add-bike-2");
                    }}
                    variant="contained"
                    size="large"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Outlet />
    </>
  );
};

export default AddBike1;
