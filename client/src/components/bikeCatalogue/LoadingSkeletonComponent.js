import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";

const skeletonArray = Array.apply(null, Array(8)).map(function () {
  return (
    <Grid item md={3} key={Math.random()}>
      <Skeleton width="250px" height="300px" sx={{ mb: -4, mt: -8 }} />
      <Skeleton width="200px" height="50px" />
      <Skeleton width="230px" height="25px" />
      <Skeleton width="170px" height="25px" />
      <Skeleton width="150px" height="40px" sx={{ mb: 8 }} />
    </Grid>
  );
});

const LoadingSkeleton = (props) => {
  return (
    <>
      <Grid item md={7}>
        <Grid container spacing={3}>
          {skeletonArray.map((element) => element)}
        </Grid>
      </Grid>
    </>
  );
};

export default LoadingSkeleton;
