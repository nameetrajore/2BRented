import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick";
const ImageComponent = (props) => {
  const bike = props.bike;
  var settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box bgcolor="transparent" px={10} pt={3}>
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
            Images
          </Typography>
        </Grid>
        <Grid item md={12} px={5} pb={7}>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {bike.imageUrl.map((image) => (
              <Grid item md={3} px={2}>
                <Box key={Math.random()}>
                  <img
                    src={image}
                    alt="Bike Image"
                    height="300px"
                    width="100%"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* <Slider {...settings}> */}
          {/*   {bike.imageUrl.map((image) => ( */}
          {/*     <Box key={Math.random()}> */}
          {/*       <img src={image} style={{ borderRadius: 10 }} /> */}
          {/*     </Box> */}
          {/*   ))} */}
          {/* </Slider> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageComponent;
