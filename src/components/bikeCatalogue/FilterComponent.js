import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CachedIcon from "@mui/icons-material/Cached";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../app/store";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const Filter = (props) => {
  const priceRange = useSelector((state) => state.filter.priceRange);
  const rating = useSelector((state) => state.filter.rating);
  const dispatch = useDispatch();
  const type = useSelector((state) => state.filter.bikeType);
  const company = useSelector((state) => state.filter.bikeCompany);
  const bikeAge = useSelector((state) => state.filter.bikeAge);
  const kmsDriven = useSelector((state) => state.filter.kmsDriven);
  const fuelType = useSelector((state) => state.filter.fuelType);
  const filter = useSelector((state) => state.filter);
  const booking = useSelector((state) => state.booking);

  const favouritesOnly = props.favouritesOnly;
  const setFavouritesOnly = props.setFavouritesOnly;

  const applyFilterHandler = () => {
    dispatch(filterActions.reset());
    props.setApplyFilter((prevState) => !prevState);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let completeFilter = {};
      if (props.applyFilter) completeFilter = booking;
      else completeFilter = { ...filter, ...booking };
      props.getBikes(completeFilter, props.setBikes);
    }, 500);

    // props.setApplyFilter(false);
    return () => {
      clearTimeout(timer);
    };
  }, [props.applyFilter, filter, booking]);

  const marksPriceRange = [
    {
      value: 100,
      label: "₹0.1k",
    },
    {
      value: 3000,
      label: "₹3k",
    },
  ];

  const marksKmsDriven = [
    {
      value: 10000,
      label: "10k",
    },
    {
      value: 1000000,
      label: "1000k+",
    },
  ];

  const marksBikeAge = [
    {
      value: 1,
      label: "1yr",
    },
    {
      value: 10,
      label: "10yr+",
    },
  ];
  return (
    <>
      <Box
        sx={{
          height: "100%",
          px: 4,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: 3,
        }}
      >
        <Grid container>
          <Grid item flexGrow={1}>
            <Typography variant="h5" fontWeight="500">
              Filters
            </Typography>
          </Grid>
          <Grid item>
            {props.applyFilter ? (
              <></>
            ) : (
              <Button variant="text" size="large" onClick={applyFilterHandler}>
                Reset
              </Button>
            )}
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography component="legend" ml={-0.6}>
            Price
          </Typography>
          <Slider
            size="small"
            value={priceRange}
            onChange={(event) => {
              dispatch(filterActions.setPriceRange(event.target.value));
              props.setApplyFilter(false);
            }}
            valueLabelDisplay="auto"
            marks={marksPriceRange}
            min={100}
            max={3000}
            step={100}
          />
        </Box>
        <Box mt={2}>
          <Typography component="legend" ml={-0.6}>
            Type of Bike
          </Typography>
          <Box mt={1} />
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              label="Type"
              onChange={(event) => {
                dispatch(filterActions.setBikeType(event.target.value));
                props.setApplyFilter(false);
              }}
            >
              <MenuItem value={"Road"}>Road</MenuItem>
              <MenuItem value={"Mountain"}>Mountain</MenuItem>
              <MenuItem value={"City"}>City</MenuItem>
              <MenuItem value={"Super-Bike"}>Super Bike</MenuItem>
              <MenuItem value={"Sport"}>Sport</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <Typography component="legend" ml={-0.6}>
            Bike Company
          </Typography>
          <Box mt={1} />
          <FormControl fullWidth>
            <InputLabel>Company</InputLabel>
            <Select
              value={company}
              label="Company"
              onChange={(event) => {
                dispatch(filterActions.setBikeCompany(event.target.value));
                props.setApplyFilter(false);
              }}
            >
              {/* TODO: Load dynamically from database */}
              <MenuItem value={"Honda"}>Honda</MenuItem>
              <MenuItem value={"KTM"}>KTM</MenuItem>
              <MenuItem value={"TVS"}>TVS</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <Typography component="legend">Min. Rating</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event) => {
              dispatch(filterActions.setRating(Number(event.target.value)));
              props.setApplyFilter(false);
            }}
          />
        </Box>
        <Box mt={2}>
          <Typography component="legend">Max. Kms Driven</Typography>
          <Slider
            size="small"
            min={10000}
            max={1000000}
            step={10000}
            marks={marksKmsDriven}
            value={kmsDriven}
            onChange={(event) => {
              dispatch(filterActions.setKmsDriven(event.target.value));
              props.setApplyFilter(false);
            }}
            defaultValue={400000}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Box>
        <Box mt={2}>
          <Typography component="legend">Max. Bike Age</Typography>
          <Slider
            size="small"
            defaultValue={3}
            min={1}
            max={10}
            value={bikeAge}
            onChange={(event) => {
              dispatch(filterActions.setBikeAge(event.target.value));
              props.setApplyFilter(false);
            }}
            aria-label="Small"
            marks={marksBikeAge}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box mt={2}>
          <Typography component="legend">Fuel Type</Typography>
          <FormControl>
            <RadioGroup
              row
              value={fuelType}
              onChange={(event) => {
                dispatch(filterActions.setFuelType(event.target.value));
                props.setApplyFilter(false);
              }}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                /* onChange={() => dispatch(filterActions.setFuelType("all"))} */
                label="All"
              />
              <FormControlLabel
                value="Petrol"
                /* onChange={() => dispatch(filterActions.setFuelType("petrol"))} */
                control={<Radio />}
                label="Petrol"
              />
              <FormControlLabel
                value="Electric"
                /* onChange={() => dispatch(filterActions.setFuelType("electric"))} */
                control={<Radio />}
                label="Electric"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box mt={2}>
          <FormGroup>
            <FormControlLabel
              value={favouritesOnly}
              onChange={() => {
                setFavouritesOnly((prevState) => !prevState);
              }}
              control={<Checkbox />}
              label="Favourites only"
            />
          </FormGroup>
        </Box>
      </Box>
    </>
  );
};

export default Filter;
