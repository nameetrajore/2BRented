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
import { Box, IconButton, Rating } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ImgMediaCard = (props) => {
  const navigate = useNavigate();
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
          <Typography gutterBottom variant="h5" component="div">
            {props.title ? props.title : "Lorem Ipsum"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.fuelType ? props.fuelType : "Fuel Type"}
            {bull}
            {props.transmission ? props.transmission : "Transmission"}
            {bull}
            {props.year ? props.year : "Year"}
          </Typography>
          <Rating value={props.rating} readOnly size="small" precision={0.1} />
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            ₹400 / day
          </Typography>
          <Typography variant="h6" sx={{ color: "#6C63FF" }}>
            ₹1200 total
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={(prevState) => props.setIsFavourite(!prevState)}>
            {props.isFavourite ? (
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

export default ImgMediaCard;
