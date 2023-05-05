import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import Grid from "@mui/material/Grid";

export const OwnerBikeCard = (props) => {
  const bike = props.bike;
  const bikeID = bike._id;
  const setBikes = props.setBikes;
  const deleteHandler = async (bikeID) => {
    const response = await fetch(`/api/bikes/${bikeID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("working");
      setBikes((prevBikes) => prevBikes.filter((bike) => bike._id !== bikeID));
    }
  };

  return (
    <>
      <Box bgcolor="transparent" px={2}>
        <Grid
          container
          sx={{
            backgroundColor: "white",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" /* backgroundColor: (t) => */,
            borderRadius: 2,
          }}
        >
          <Grid item md={12}>
            <Grid container spacing={3}>
              <Grid item md={2}>
                <Box ml={3} mt={3} mb={3}>
                  <img
                    src={bike.imageUrl[0]}
                    alt="Bike Image"
                    height="250px"
                    width="100%"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
                </Box>
              </Grid>
              <Grid item md={10}>
                <Grid container spacing={1} py={2}>
                  <Grid item sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" fontWeight="bold">
                      {bike.brand} {bike.model}
                      <span color="#C071FF"> {bike.year.substring(0, 4)}</span>
                    </Typography>
                  </Grid>
                  <Grid item px={3}>
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      onClick={() => deleteHandler(bikeID)}
                    >
                      Delete
                    </Button>
                  </Grid>
                  <Grid item md={12}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item sx={{ pl: "20px" }}>
                        <Rating
                          name="rating"
                          value={bike.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={12}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item sx={{ pl: "20px" }}>
                        <Typography variant="subtitle1" color="text.secondary">
                          <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                          <span style={{ display: "inline" }}>
                            {bike.location.address}, {bike.location.city},{" "}
                            {bike.location.state}, {bike.location.pincode}
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={12}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item sx={{ pl: "20px" }}>
                        <Typography variant="subtitle1" color="text.secondary">
                          <span style={{ fontWeight: "bold" }}>
                            Transmission Type:
                          </span>{" "}
                          <span style={{ display: "inline" }}>
                            {bike.transmission}
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={12}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item sx={{ pl: "20px" }}>
                        <Typography variant="subtitle1" color="text.secondary">
                          <span style={{ fontWeight: "bold" }}>Fuel Type:</span>{" "}
                          <span style={{ display: "inline" }}>
                            {bike.fuelType}
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={12}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item sx={{ pl: "20px" }}>
                        <Typography variant="subtitle1" color="text.secondary">
                          <span style={{ fontWeight: "bold" }}>Type:</span>{" "}
                          <span style={{ display: "inline" }}>{bike.type}</span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={12}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item sx={{ pl: "20px" }}>
                        <Typography variant="subtitle1" color="text.secondary">
                          <span style={{ fontWeight: "bold" }}>Mileage:</span>{" "}
                          <span style={{ display: "inline" }}>
                            {bike.mileage} kmpl
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
