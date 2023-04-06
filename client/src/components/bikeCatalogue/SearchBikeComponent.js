import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
const SearchBike = (props) => {
  const { searchBike, setSearchBike } = props;
  return (
    <>
      <Grid
        container
        pt={3}
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Grid item md={8} sx={{ flexGrow: 1 }} />
        <Grid item md={4}>
          <Grid container spacing={2}>
            <Grid item md={1} />
            <Grid item md={5}>
              <TextField
                fullWidth
                value={searchBike}
                label="Search"
                onChange={(event) => setSearchBike(event.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item md={2}>
              <Button
                variant="outlined"
                sx={{
                  height: "100%",
                }}
              >
                <SortIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBike;
