import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
const ReviewComponent = (props) => {
  const bike = props.bike;
  return (
    <Box bgcolor="transparent" px={10} pt={3} pb={3}>
      <Grid
        container
        sx={{
          backgroundColor: "white",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" /* backgroundColor: (t) => */,
          borderRadius: 2,
        }}
      >
        <Grid item p={3} md={12}>
          <Typography variant="h4" fontWeight={500}>
            Reviews
          </Typography>
        </Grid>
        <Grid item md={12} px={3}>
          <Typography variant="h4" fontWeight={700}>
            {bike.rating} <Rating value={bike.rating} size="large" readOnly />
          </Typography>
        </Grid>
        {bike.reviews.map((review) => (
          <Grid container alignItems="center" spacing={2} pt={3} px={3}>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" fontWeight="700">
                {review.userName}
              </Typography>
              <Typography variant="body1" component="div">
                {review.review}
              </Typography>
            </Grid>
            <Grid item>
              <Rating value={review.rating} readOnly />
            </Grid>
          </Grid>
        ))}
        <Box p={1.5} />
      </Grid>
    </Box>
  );
};

export default ReviewComponent;
