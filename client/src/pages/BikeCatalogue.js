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
import { useGetBike } from "../hooks/useGetBikes";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";
import LoadingSkeleton from "../components/bikeCatalogue/LoadingSkeletonComponent";

export const BikeCatalouge = () => {
  const navigate = useNavigate();
  const [applyFilter, setApplyFilter] = useState(true);
  const [bikes, setBikes] = useState([]);

  const { getBikes, isLoading } = useGetBike();

  const NoBikesFound = () => {
    return (
      <Grid item md={7} xs={5} sm={6}>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Typography variant="h4"> No bikes found (T⌓T)</Typography>
        </Grid>
      </Grid>
    );
  };

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
          <Filter
            applyFilter={applyFilter}
            setApplyFilter={setApplyFilter}
            setBikes={setBikes}
            getBikes={getBikes}
          />
        </Grid>
        {isLoading ? (
          <LoadingSkeleton />
        ) : bikes.length ? (
          <Grid item md={7} xs={5} sm={6}>
            <Grid container spacing={3}>
              {bikes.map((bike) => (
                <Grid item key={bike._id} md={3} lg={3}>
                  <BikeCard bike={bike} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <NoBikesFound />
        )}
      </Grid>
    </div>
  );
};
