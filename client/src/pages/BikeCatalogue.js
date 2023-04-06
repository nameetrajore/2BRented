import React, { useEffect, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BikeCard from "../components/BikeCard";
import TextField from "@mui/material/TextField";
// import { makeStyles } from '@mui/styles';
import Filter from "../components/bikeCatalogue/FilterComponent";
import { Navbar } from "../components/Navbar";
import SearchBooking from "../components/bikeCatalogue/SearchBookingComponent";
import SearchBike from "../components/bikeCatalogue/SearchBikeComponent";

export const BikeCatalouge = () => {
  const navigate = useNavigate();
  // const [searchBike, setSearchBike] = useState("");
  // const [priceRange, setPriceRange] = useState([800, 1200]);
  // const [bikeType, setBikeType] = useState("");
  // const [bikeCompany, setBikeCompany] = useState("");
  // const [rating, setRating] = useState(0);
  // const [kmsDriven, setKmsDriven] = useState(400000);
  // const [bikeAge, setBikeAge] = useState(2);
  // const [fuelType, setFuelType] = useState("all");

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/bikes")
  //     .then((res) => res.json())
  //     .then((data) => setNotes(data));
  // }, []);

  // const classes = useStyles();
  return (
    <div>
      <Navbar />
      <SearchBooking />
      <SearchBike />
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
        py={3}
      >
        <Grid item md={2} sm={3} xs={4}>
          <Filter />
        </Grid>
        {/* <Grid item md={12}> */}
        {/*   <Grid container> */}
        {/*     {/\* {notes.map((note) => ( *\/} */}
        {/*     <Grid item key={note.id} xs={12} md={3} lg={4}> */}
        {/*       <BikeCard note={note} /> */}
        {/*     </Grid> */}
        {/*   </Grid> */}
        {/* </Grid> */}
        <Grid item md={7} xs={5} sm={6}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
