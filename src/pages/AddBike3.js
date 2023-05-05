import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavbarOwner } from "../components/NavbarOwner";
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { bikeDetailsActions } from "../app/store";
import { useState } from "react";

export const AddBike3 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addressBike, setAddress] = useState("");
  const [pincodeBike, setPincode] = useState("");
  const [stateBike, setState] = useState("");
  const [cityBike, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("inside")
    //console.log("this is bike address: ", addressBike, pincodeBike, stateBike, cityBike)
    dispatch(bikeDetailsActions.setLocation({
        address: addressBike,
        city: cityBike,
        pincode: pincodeBike,
        stateName: stateBike,
      }));
    
    
    // dispatch({
    //     type: "ADD_ADDRESS",
    //     payload: {
    //         addressBike,
    //         pincodeBike,
    //         stateBike,
    //         countryBike,
    //     },
    //   });
    navigate("/add-bike-4");
  };

  return (
    <>
      <NavbarOwner/>
      <Grid 
        alignItems = "center"
        justifyContent="center"
        
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
        component={Paper}
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
          width: 700,
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
          > Add Address</Typography>
          
          <Grid
            alignItems = "center"
            justifyContent="center"
           
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
          }}
          >
            <CssBaseline />
            <Box
              component="form"
              noValidate
              
              sx={{ mt: 4 }}
            >
              <Grid container spacing={3} alignItems="center" align="center" justifyContent="center">
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    style={{textAlign: "center"}}
                    value={addressBike}
                    onChange={(e) => setAddress(e.target.value)}
                    id="bikeAddr"
                    label="Address"
                    name="Address"
                    autoFocus
                    color="secondary"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    
                    value={pincodeBike}
                    onChange={(e) => setPincode(e.target.value)}
                    id="pincode"
                    label="Pincode"
                    name="pincode"
                    autoFocus
                    color="secondary"
                  />
                </Grid>

                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    style={{textAlign: "center"}}
                    
                    value={stateBike}
                    onChange={(e) => setState(e.target.value)}
                    id="state"
                    label="State"
                    name="State"
                    autoFocus
                    color="secondary"
                  />
                </Grid>

                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    
                    value = {cityBike}
                    onChange={(e) => setCity(e.target.value)}
                    id="city"
                    label="City"
                    name="city"
                    autoFocus
                    color="secondary"
                  />
                </Grid>
                
                <Grid item md = {12}>
                  <Button item 
                    type="submit"
                    // onClick={() => {navigate("/add-bike-3")}}
                    onClick={handleSubmit}
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

export default AddBike3;