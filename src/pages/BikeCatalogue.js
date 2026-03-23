import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BikeCard from "../components/BikeCard";
import Filter from "../components/bikeCatalogue/FilterComponent";
import { Navbar } from "../components/Navbar";
import SearchBooking from "../components/bikeCatalogue/SearchBookingComponent";
import SearchBike from "../components/bikeCatalogue/SearchBikeComponent";
import { useGetBikes } from "../hooks/useGetBikes";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import LoadingSkeleton from "../components/bikeCatalogue/LoadingSkeletonComponent";
import { bookingActions } from "../app/store";
import Footer from "../components/Footer";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

export const BikeCatalouge = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookingActions.setDropLocation(searchParams.get("dropLocation")));
    dispatch(bookingActions.setPickupLocation(searchParams.get("pickupLocation")));
    dispatch(bookingActions.setDropDate(searchParams.get("dropDate")));
    dispatch(bookingActions.setPickupDate(searchParams.get("pickupDate")));
  }, []);

  const [applyFilter, setApplyFilter] = useState(true);
  const [bikes, setBikes] = useState([]);
  const [searchBike, setSearchBike] = useState("");
  const [sort, setSort] = useState("ip");

  const [favouritesOnly, setFavouritesOnly] = useState(false);

  let filteredBikes = searchBike
    ? bikes.filter(
        (bike) =>
          bike.model.toLowerCase().includes(searchBike.toLowerCase()) ||
          bike.brand.toLowerCase().includes(searchBike.toLowerCase())
      )
    : favouritesOnly
    ? bikes.filter((bike) => bike.isFavourite)
    : [...bikes];

  if (sort === "ip") filteredBikes.sort((a, b) => a.dailyRate - b.dailyRate);
  else if (sort === "dp") filteredBikes.sort((a, b) => b.dailyRate - a.dailyRate);
  else if (sort === "ir") filteredBikes.sort((a, b) => a.rating - b.rating);
  else if (sort === "dr") filteredBikes.sort((a, b) => b.rating - a.rating);

  const { getBikes, isLoading } = useGetBikes();

  const NoBikesFound = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        gap: 2,
      }}
    >
      <TwoWheelerIcon sx={{ fontSize: 64, color: "text.disabled" }} />
      <Typography variant="h5" color="text.secondary">
        No bikes found
      </Typography>
      <Typography variant="body1" color="text.disabled" textAlign="center">
        Try a different city, date, or clear your filters.
      </Typography>
    </Box>
  );

  return (
    <div>
      <Navbar />
      {/* Separator bar — full page width */}
      <SearchBooking
        setBikes={setBikes}
        getBikes={getBikes}
        applyFilter={applyFilter}
      />

      <Container maxWidth="xl">
        {/* Search/sort row — full container width, above filter+cards */}
        <SearchBike
          searchBike={searchBike}
          setSearchBike={setSearchBike}
          sort={sort}
          setSort={setSort}
        />

        {/* Filter + Cards — start at the same level */}
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box
            sx={{
              width: 280,
              flexShrink: 0,
              position: "sticky",
              top: 24,
              p: 3,
              display: { xs: "none", md: "block" },
            }}
          >
            <Filter
              applyFilter={applyFilter}
              setApplyFilter={setApplyFilter}
              setBikes={setBikes}
              getBikes={getBikes}
              favouritesOnly={favouritesOnly}
              setFavouritesOnly={setFavouritesOnly}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: 0, py: 5 }}>
            {isLoading ? (
              <LoadingSkeleton />
            ) : bikes.length ? (
              <Grid container spacing={3}>
                {filteredBikes.map((bike) => (
                  <Grid item key={bike._id} xs={12} sm={6} md={4} lg={3}>
                    <BikeCard bike={bike} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <NoBikesFound />
            )}
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};
