import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavbarOwner } from "../components/NavbarOwner";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { bikeDetailsActions } from "../app/store";
import { useState } from "react";
export const AddBike2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const brand = useSelector((state) => state.bikeDetails.brand);
  const model = useSelector((state) => state.bikeDetails.model);
  const year = useSelector((state) => state.bikeDetails.year);
  const type = useSelector((state) => state.bikeDetails.type);
  const fuelType = useSelector((state) => state.bikeDetails.fuelType);
  const registrationNumber = useSelector(
    (state) => state.bikeDetails.registrationNumber
  );
  const bikeAge = useSelector((state) => state.bikeDetails.bikeAge);
  const mileage = useSelector((state) => state.bikeDetails.mileage);
  const dailyRate = useSelector((state) => state.bikeDetails.dailyRate);
  const kmsDriven = useSelector((state) => state.bikeDetails.kmsDriven);
  const [warningDailyRate, setWarningDailyRate] = useState(false);
  const [warningDailyRateText, setWarningDailyRateText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      //console.log("this is bike details: ", brand, model, year)
      navigate("/add-bike-3");
    }
  };

  const handleDailyRateChange = (event) => {
    const value = event.target.value;
    if (value < 100) {
      setWarningDailyRate(true);
      setWarningDailyRateText("Value must be greater than or equal to 100");
    } else if (value > 3000) {
      setWarningDailyRate(true);
      setWarningDailyRateText("Value must be less than or equal to 3000");
    } else {
      setWarningDailyRate(false);
      setWarningDailyRateText("");
      dispatch(bikeDetailsActions.setDailyRate(value));
    }
  };

  return (
    <>
      <NavbarOwner />
      <Grid
        alignItems="center"
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
          // onSubmit={handleSubmit}
          sx={{
            height: "100%",
            px: 4,
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 700,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: 2,
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
            Bike Details
          </Typography>

          <Grid
            alignItems="center"
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
              // onSubmit={handleSubmit}
              sx={{ mt: 4 }}
            >
              <Grid
                container
                spacing={3}
                alignItems="center"
                align="center"
                justifyContent="center"
              >
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    style={{ textAlign: "center" }}
                    onChange={(event) => {
                      dispatch(bikeDetailsActions.setBrand(event.target.value));
                    }}
                    value={brand}
                    id="bikeBrand"
                    label="Brand"
                    name="brand"
                    color="secondary"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    onChange={(event) => {
                      dispatch(bikeDetailsActions.setModel(event.target.value));
                    }}
                    value={model}
                    id="bikeModel"
                    label="Model"
                    name="model"
                    color="secondary"
                  />
                </Grid>

                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    style={{ textAlign: "center" }}
                    onChange={(event) => {
                      dispatch(bikeDetailsActions.setYear(event.target.value));
                    }}
                    value={year}
                    id="bikeYear"
                    label="year"
                    name="Year"
                    color="secondary"
                  />
                </Grid>

                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    onChange={(event) => {
                      dispatch(
                        bikeDetailsActions.setRegistrationNumber(
                          event.target.value
                        )
                      );
                    }}
                    value={registrationNumber}
                    id="regNumber"
                    label="Registration Number"
                    name="regNumber"
                    color="secondary"
                  />
                </Grid>

                <Grid item md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="bikeType">Fuel Type</InputLabel>
                    <Select
                      labelId="fuelType"
                      id="fuelType"
                      value={fuelType}
                      label="Fuel Type"
                      onChange={(event) => {
                        dispatch(
                          bikeDetailsActions.setFuelType(event.target.value)
                        );
                      }}
                    >
                      <MenuItem value="Petrol">Petrol</MenuItem>
                      <MenuItem value="Electric">Electric</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="bikeType">Bike Type</InputLabel>
                    <Select
                      labelId="bikeType"
                      id="bikeType"
                      value={type}
                      label="Type"
                      onChange={(event) => {
                        dispatch(
                          bikeDetailsActions.setType(event.target.value)
                        );
                      }}
                    >
                      <MenuItem value="Road">Road</MenuItem>
                      <MenuItem value="Mountain">Mountain</MenuItem>
                      <MenuItem value="City">City</MenuItem>
                      <MenuItem value="Super-Bike">Super-Bike</MenuItem>
                      <MenuItem value="Sporrt">Sport</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    style={{ textAlign: "center" }}
                    onChange={(event) => {
                      dispatch(
                        bikeDetailsActions.setBikeAge(event.target.value)
                      );
                    }}
                    type="number"
                    value={bikeAge}
                    id="bikeAge"
                    label="Bike Age"
                    name="bikeAge"
                    inputProps={{
                      min: 0,
                      max: 10,
                    }}
                    color="secondary"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    style={{ textAlign: "center" }}
                    type="number"
                    onChange={(event) => {
                      dispatch(
                        bikeDetailsActions.setMileage(event.target.value)
                      );
                    }}
                    value={mileage}
                    id="bikeMileage"
                    label="Mileage"
                    name="bikeMileage"
                    color="secondary"
                  />
                </Grid>
                <Grid item md={6}>
                  <>
                    <TextField
                      required
                      fullWidth
                      style={{ textAlign: "center" }}
                      type="number"
                      onChange={handleDailyRateChange}
                      value={dailyRate}
                      id="dailyRate"
                      inputProps={{
                        step: 100,
                        min: 100,
                        max: 3000,
                      }}
                      label="Daily Rate"
                      name="dailyRate"
                      helperText={warningDailyRate ? warningDailyRateText : ""}
                      color="secondary"
                    />
                    {/* {warningDailyRate && <p style={{color: 'red'}}>{warningDailyRateText}</p>} */}
                  </>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    onChange={(event) => {
                      dispatch(
                        bikeDetailsActions.setKmsDriven(event.target.value)
                      );
                    }}
                    value={kmsDriven}
                    id="kmsDriven"
                    label="Kms Driven"
                    name="kmsDriven"
                    color="secondary"
                  />
                </Grid>

                <Grid item md={12}>
                  <Button
                    item
                    type="submit"
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

export default AddBike2;
