import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
const SearchBike = (props) => {
  const { searchBike, setSearchBike } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleSort = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);

  const handleClose = (event) => {
    setAnchorEl(null);
    if (event.target.value === "Sort by increasing price") props.setSort("ip");
    if (event.target.value === "Sort by decreasing price") props.setSort("dp");
    if (event.target.value === "Sort by increasing rate") props.setSort("ir");
    if (event.target.value === "Sort by decreasing rate") props.setSort("dr");
  };

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
                onChange={(event) => {
                  setSearchBike(event.target.value);
                  console.log(event.target.value);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item md={2}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                onClick={handleSort}
                sx={{
                  height: "100%",
                }}
              >
                <SortIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                  mx: -1,
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  Sort by increasing price
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Sort by decreasing price
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Sort by increasing rating
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Sort by decreasing rating
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBike;
