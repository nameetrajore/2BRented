import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import { createSearchParams, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { Box, Button, Chip, IconButton, Rating, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { useFavourite } from "../hooks/useFavourite";

const BikeCard = (props) => {
  const bike = props.bike;
  const { storeIsFavourite } = useFavourite(bike.isFavourite);
  const [isFavourite, setIsFavourite] = useState(bike.isFavourite);
  const [imgError, setImgError] = useState(false);
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const params = { dropLocation, pickupLocation, dropDate, pickupDate };
  const navigate = useNavigate();
  const id = useSelector((state) => state.auth._id);
  const message = {
    message: "You need to login first in order to add bikes to favourites.",
  };

  const handleIsFavourite = () => {
    if (id !== -1) setIsFavourite((prevState) => !prevState);
    else navigate(`/login?${createSearchParams(message)}`);
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      const timer = setTimeout(() => {
        storeIsFavourite(bike._id, isFavourite, bike);
      }, 250);
      return () => clearTimeout(timer);
    }
    isFirstRender.current = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavourite]);

  const numberOfDays =
    Math.floor(new Date(dropDate).getTime() - new Date(pickupDate).getTime()) /
    86400000;

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "rgba(99, 99, 99, 0.15) 0px 2px 12px 0px",
        transition: "box-shadow 0.2s",
        "&:hover": {
          boxShadow: "rgba(51, 179, 166, 0.3) 0px 8px 24px 0px",
        },
      }}
    >
      {imgError || !bike.imageUrl?.[0] ? (
        <Box
          sx={{
            height: 180,
            bgcolor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TwoWheelerIcon sx={{ fontSize: 64, color: "#d0d0d0" }} />
        </Box>
      ) : (
        <CardMedia
          component="img"
          alt={bike.brand + " " + bike.model}
          height="180"
          image={bike.imageUrl[0]}
          onError={() => setImgError(true)}
          sx={{ objectFit: "cover" }}
        />
      )}
      <CardContent sx={{ pb: 0 }}>
        <Tooltip title={bike.brand + " " + bike.model} placement="top">
          <Typography gutterBottom variant="h6" noWrap fontWeight={600}>
            {bike.brand} {bike.model}
          </Typography>
        </Tooltip>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
          <LocationOnIcon sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography variant="body2" color="text.secondary" noWrap>
            {bike.locationCity}, {bike.locationState}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 0.5, mb: 1, flexWrap: "wrap" }}>
          <Chip label={bike.fuelType} size="small" variant="outlined" />
          {bike.transmission && (
            <Chip label={bike.transmission} size="small" variant="outlined" />
          )}
          <Chip label={bike.year?.substring(0, 4)} size="small" variant="outlined" />
        </Box>

        <Rating value={bike.rating} readOnly size="small" precision={0.1} />

        <Typography variant="body2" color="text.secondary" mt={0.5}>
          ₹{bike.dailyRate} / day
        </Typography>
        {numberOfDays > 0 && (
          <Typography variant="h6" color="primary.main" fontWeight={700}>
            ₹{bike.dailyRate * numberOfDays} total
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 1 }}>
        <IconButton onClick={handleIsFavourite} size="small">
          {isFavourite ? (
            <FavoriteIcon sx={{ color: pink[500] }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            navigate(`/booking-summary/${bike._id}?${createSearchParams(params)}`)
          }
          sx={{ borderRadius: 2, px: 2 }}
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default BikeCard;
