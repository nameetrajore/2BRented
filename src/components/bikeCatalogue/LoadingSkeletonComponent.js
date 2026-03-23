import { Box, Card, CardActions, CardContent, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";

const SkeletonCard = () => (
  <Card sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.15) 0px 2px 12px 0px" }}>
    {/* Image */}
    <Skeleton variant="rectangular" height={180} />

    <CardContent sx={{ pb: 0 }}>
      {/* Brand + model */}
      <Skeleton variant="text" width="70%" height={32} sx={{ mb: 0.5 }} />

      {/* Location */}
      <Skeleton variant="text" width="50%" height={20} sx={{ mb: 1 }} />

      {/* Chips (fuel type, transmission, year) */}
      <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
        <Skeleton variant="rounded" width={60} height={24} />
        <Skeleton variant="rounded" width={60} height={24} />
        <Skeleton variant="rounded" width={48} height={24} />
      </Box>

      {/* Rating */}
      <Skeleton variant="text" width={100} height={20} />

      {/* Price */}
      <Skeleton variant="text" width="40%" height={20} sx={{ mt: 0.5 }} />
    </CardContent>

    <CardActions sx={{ px: 2, pb: 2, pt: 1 }}>
      {/* Favourite icon */}
      <Skeleton variant="circular" width={32} height={32} />
      <Box sx={{ flexGrow: 1 }} />
      {/* Book button */}
      <Skeleton variant="rounded" width={64} height={30} />
    </CardActions>
  </Card>
);

const LoadingSkeleton = () => (
  <Grid container spacing={3}>
    {Array.from({ length: 8 }).map((_, i) => (
      <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
        <SkeletonCard />
      </Grid>
    ))}
  </Grid>
);

export default LoadingSkeleton;
