import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BikeCard from "../components/BikeCard";
import TextField from "@mui/material/TextField";
import { Card, Drawer, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import { makeStyles } from '@mui/styles';
import { ClassNames } from "@emotion/react";
import { shadows } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import CachedIcon from "@mui/icons-material/Cached";
import Filter from "../components/bikeCatalogue/filterComponent";
import { bookingActions } from "../app/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navbar } from "../components/Navbar";

const drawerWidth = 240;
const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderBottom: 3,
  borderColor: "#ffea00",
};

const paper = {
  height: "90%",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  verticalAlign: "middle",
  boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.25)",
  borderRadius: "25px",
  elevation: "25", //elevation not working
};

// const useStyles = makeStyles({
//   paper: {
//     width: "100%",
//     minHeight: "100vh",
//     backgroundColor: 'grey'
//   },
//   card: {
//     backgroundColor: 'blue'
//   }
// });

// const usestyle = makeStyles({
//   drawer:{
//     width: drawerWidth
//   }
// })

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

export const BikeCatalouge = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropDate = useSelector((state) => state.booking.dropDate);
  const pickupDate = useSelector((state) => state.booking.pickupDate);
  const dropLocation = useSelector((state) => state.booking.dropLocation);
  const pickupLocation = useSelector((state) => state.booking.pickupLocation);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  // const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box
        m={5}
        borderBottom={2}
        maxWidth="500vh"
        pb={3}
        margin={0}
        padding={3}
        sx={{
          ...commonStyles,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F1F1F1",
        }}
      >
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="drop-date"
              label="Drop Date"
              value={dropDate}
              onChange={(event) => {
                dispatch(bookingActions.setDropDate(event.target.value));
              }}
              name="drop-date"
              autoComplete="date"
              variant="filled"
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="pickup-date"
              label="Pickup Date"
              value={pickupDate}
              onChange={(event) => {
                dispatch(bookingActions.setPickupDate(event.target.value));
              }}
              name="pickup-date"
              autoComplete="date"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="drop-location"
              label="Drop Location"
              value={dropLocation}
              onChange={(event) => {
                dispatch(bookingActions.setDropLocation(event.target.value));
              }}
              name="drop-location"
              autoComplete="location"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              margin="none"
              required
              id="pickup-location"
              label="Pickup Location"
              value={pickupLocation}
              onChange={(event) => {
                dispatch(bookingActions.setPickupLocation(event.target.value));
              }}
              name="pickup-location"
              autoComplete="location"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              /* onClick={() => navigate("/bike-catalogue")} */
              size="large"
              color="inherit"
              sx={{ p: 1.9 }}
            >
              <CachedIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid
        alignItems="center"
        justifyContent="center"
        spacing={3}
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
        py={3}
      >
        <Grid item md={2} sm={3} xs={4}>
          <Filter />
        </Grid>
        {/* <Grid item md={12}> */}
        {/*   <Grid container> */}
        {/*     {/\* {notes.map((note) => ( *\/} */}
        {/*     <Grid item key={note.id} xs={12} md={3} lg={4}> */}
        {/*       <BikeCard note={note} /> */}
        {/*     </Grid> */}
        {/*   </Grid> */}
        {/* </Grid> */}
        <Grid item md={7} xs={5} sm={6}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
            <Grid item md={3} sm={4} xs={5}>
              <BikeCard note={" "} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
