import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavbarOwner } from "../components/NavbarOwner";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { FormControl, InputLabel, Input, CardMedia, Card } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const AddBike4 = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [open, setOpen] = useState(false);

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
  const location = useSelector((state) => state.bikeDetails.location);
  const userID = useSelector((state) => state.ownerAuth.ownerId);
  const rating = 0;
  const dailyRate = useSelector((state) => state.bikeDetails.dailyRate);
  const kmsDriven = useSelector((state) => state.bikeDetails.kmsDriven);

  const [images, setImages] = useState([]);
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  
    setOpen(false);
  };

  const handleImageChange = (event) => {
    setImages(event.target.files);
    const files = event.target.files;

    const urls = [];
    for (let i = 0; i < files.length; i++) {
      urls.push(URL.createObjectURL(files[i]));
    }
    setSelectedFiles(urls);
  };

  const StyledInput = styled("input")({
    display: "none",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("this is location : ", location);
    const formData = new FormData();
    formData.append("owner", userID);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("fuelType", fuelType);
    formData.append("type", type);
    formData.append("registrationNumber", registrationNumber);
    formData.append("bikeAge", bikeAge);
    formData.append("mileage", mileage);
    formData.append("location", JSON.stringify(location));
    formData.append("dailyRate", dailyRate);
    formData.append("kmsDriven", kmsDriven);
    formData.append("rating", rating);
    formData.append("transmission", "Geared");

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
      console.log(images[i]);
    }

    try {
      console.log("this is the form data", formData.values);
      const response = await axios.post(
        "http://localhost:4000/api/bikes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setOpen(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavbarOwner />

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={3}
        align="center"
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
          <Grid item md={12}>
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
              Add Photos
            </Typography>
          </Grid>
          <Grid item md={12}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <FormControl>
                {/* <InputLabel htmlFor="images-input">Images:</InputLabel> */}
                <Input
                  id="images-input"
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  inputProps={{ multiple: true }}
                />
              </FormControl>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
              <Grid item md={12} pt={1}>
                {selectedFiles.length > 0 && (
                  <>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                      }}
                      pt={2}
                      pb={2}
                    >
                      {" "}
                      Preview
                    </Typography>
                  </>
                )}
              </Grid>
              <Grid container spacing={2} mt={2}>
                {selectedFiles.map((url) => (
                  <Grid item xs={12} sm={6} md={4} key={url}>
                    <Card>
                      <CardMedia component="img" image={url} />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </form>
          </Grid>

          <CssBaseline />
        </Box>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Bike added successfully!
        </Alert>
      </Snackbar>

      {/* <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label>
        Images:
        <input type="file" multiple onChange={handleImageChange} />
      </label>
      <button type="submit">Submit</button>
    </form> */}
      <Outlet />
    </>
  );
};

export default AddBike4;
