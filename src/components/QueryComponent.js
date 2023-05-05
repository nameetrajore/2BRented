import { Grid, Typography, Button, Box } from "@mui/material";

const QueryComponent = (props) => {
  const query = props.booking;
  return (
    <>
      <Grid
        item
        md={12}
        mt={3}
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 2,
        }}
      >
        <Grid
          container
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "20%",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 2,
            backgroundPosition: "right bottom",
          }}
        >
          <Grid item md={12} pl={1}>
            <Box>
              <Typography variant="h4" fontWeight={500}>
                {query.name}
              </Typography>
              <Typography component="h1" variant="h6">
                {query.email}
              </Typography>
              <Typography component="h1" variant="h6">
                {query.mobileNumber}
              </Typography>
              <Typography component="h1" variant="h6">
                Comment : {query.comment}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default QueryComponent;
