import * as React from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dummyImg from "../resources/customerHomePage1.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, Rating, Tooltip } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BikeCard = (props) => {
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const navigate = useNavigate();
  const bike = props.bike;
  const numberOfDays =
    Math.floor(new Date(dropDate).getTime() - new Date(pickupDate).getTime()) /
    86400000;

  return (
    <Box
      sx={{
        boxShadow: 1,
        borderRadius: 3,
      }}
    >
      <Card
        sx={{
          boxShadow: 1,
          borderRadius: 3,
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          width="200"
          image={dummyImg}
        />
        <CardContent sx={{ pb: 0 }}>
          <Tooltip title={bike.brand + " " + bike.model} placement="top">
            <Typography gutterBottom variant="h6" noWrap component="div">
              {bike.brand + " " + bike.model}
            </Typography>
          </Tooltip>
          <Typography variant="body2" color="text.secondary">
            {bike.fuelType}
            {bull}
            {bike.transmission}
            {bull}
            {bike.year.substring(0, 4)}
          </Typography>
          <Rating value={bike.rating} readOnly size="small" precision={0.1} />
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            ₹{bike.dailyRate} / day
          </Typography>
          <Typography variant="h6" sx={{ color: "#6C63FF" }}>
            ₹{bike.dailyRate * numberOfDays} total
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={(prevState) => props.setIsFavourite(!prevState)}>
            {bike.isFavourite ? (
              <FavoriteIcon sx={{ color: pink[500] }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/booking-summary/1");
            }}
          >
            <ArrowForward />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BikeCard;
