import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid, Typography } from "@mui/material";
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

    return () => {
      clearTimeout(timer);
    };
  }, [props.applyFilter, filter, booking]);

  const marksPriceRange = [{ value: 100 }, { value: 3000 }];
  const marksKmsDriven = [{ value: 10000 }, { value: 1000000 }];
  const marksBikeAge = [{ value: 1 }, { value: 10 }];

  return (
    <Box
      sx={{
        px: 4,
        py: 3,
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: 3,
      }}
    >
      <Grid container alignItems="center">
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight={600}>
            Filters
          </Typography>
        </Grid>
        <Grid item>
          {!props.applyFilter && (
            <Button variant="text" size="small" onClick={applyFilterHandler}>
              Reset
            </Button>
          )}
        </Grid>
      </Grid>

      <Box mt={1}>
        <Typography variant="body2" fontWeight={500} mb={1.5}>Price / day</Typography>
        <Slider
          size="small"
          value={priceRange}
          onChange={(event) => {
            dispatch(filterActions.setPriceRange(event.target.value));
            props.setApplyFilter(false);
          }}
          valueLabelDisplay="auto"
          valueLabelFormat={(v) => `₹${v}`}
          marks={marksPriceRange}
          min={100}
          max={3000}
          step={100}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 0.5 }}>
          <Typography variant="caption" color="text.secondary">₹100</Typography>
          <Typography variant="caption" color="text.secondary">₹3k</Typography>
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" fontWeight={500} mb={1.5}>Bike Type</Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            label="Type"
            onChange={(event) => {
              dispatch(filterActions.setBikeType(event.target.value));
              props.setApplyFilter(false);
            }}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="Road">Road</MenuItem>
            <MenuItem value="Mountain">Mountain</MenuItem>
            <MenuItem value="City">City</MenuItem>
            <MenuItem value="Super-Bike">Super Bike</MenuItem>
            <MenuItem value="Sport">Sport</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" fontWeight={500} mb={1.5}>Brand</Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Brand</InputLabel>
          <Select
            value={company}
            label="Brand"
            onChange={(event) => {
              dispatch(filterActions.setBikeCompany(event.target.value));
              props.setApplyFilter(false);
            }}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="Bajaj">Bajaj</MenuItem>
            <MenuItem value="Hero">Hero</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="KTM">KTM</MenuItem>
            <MenuItem value="Royal Enfield">Royal Enfield</MenuItem>
            <MenuItem value="TVS">TVS</MenuItem>
            <MenuItem value="Yamaha">Yamaha</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" fontWeight={500} mb={1.5}>Min. Rating</Typography>
        <Rating
          value={rating}
          onChange={(event) => {
            dispatch(filterActions.setRating(Number(event.target.value)));
            props.setApplyFilter(false);
          }}
        />
      </Box>

      <Box mt={3}>
        <Typography variant="body2" fontWeight={500} mb={1.5}>Max. Kms Driven</Typography>
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
          valueLabelDisplay="auto"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 0.5 }}>
          <Typography variant="caption" color="text.secondary">10k</Typography>
          <Typography variant="caption" color="text.secondary">1M+</Typography>
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" fontWeight={500} mb={1.5}>Max. Bike Age</Typography>
        <Slider
          size="small"
          min={1}
          max={10}
          value={bikeAge}
          onChange={(event) => {
            dispatch(filterActions.setBikeAge(event.target.value));
            props.setApplyFilter(false);
          }}
          marks={marksBikeAge}
          valueLabelDisplay="auto"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 0.5 }}>
          <Typography variant="caption" color="text.secondary">1yr</Typography>
          <Typography variant="caption" color="text.secondary">10yr+</Typography>
        </Box>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" fontWeight={500} mb={1}>Fuel Type</Typography>
        <FormControl>
          <RadioGroup
            value={fuelType}
            onChange={(event) => {
              dispatch(filterActions.setFuelType(event.target.value));
              props.setApplyFilter(false);
            }}
          >
            <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
            <FormControlLabel value="Petrol" control={<Radio size="small" />} label="Petrol" />
            <FormControlLabel value="Electric" control={<Radio size="small" />} label="Electric" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box mt={2}>
        <FormGroup>
          <FormControlLabel
            value={favouritesOnly}
            onChange={() => setFavouritesOnly((prevState) => !prevState)}
            control={<Checkbox size="small" />}
            label="Favourites only"
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Filter;
