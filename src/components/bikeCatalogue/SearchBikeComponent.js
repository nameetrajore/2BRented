import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const SearchBike = (props) => {
  const { searchBike, setSearchBike, setSort } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleSort = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const sortOptions = [
    { label: "Price: Low to High", value: "ip" },
    { label: "Price: High to Low", value: "dp" },
    { label: "Rating: Low to High", value: "ir" },
    { label: "Rating: High to Low", value: "dr" },
  ];

  return (
    <Grid
      container
      pt={4}
      px={0}
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
    >
      <Grid item xs={8} sm={5} md={3}>
        <TextField
          fullWidth
          value={searchBike}
          label="Search by brand or model"
          size="small"
          onChange={(event) => setSearchBike(event.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <Button
          variant="outlined"
          onClick={handleSort}
          sx={{ height: "40px", minWidth: "40px" }}
          title="Sort"
        >
          <SortIcon />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {sortOptions.map(({ label, value }) => (
            <MenuItem
              key={value}
              onClick={() => {
                setSort(value);
                handleClose();
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
};

export default SearchBike;
