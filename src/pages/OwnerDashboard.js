import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"; // import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import loginBackground from "../resources/loginBackground.png";
import  {useGetRentedBikes}  from "../hooks/useGetRentedBikes";
import { Navbar } from "../components/Navbar";
import { NavbarOwner } from "../components/NavbarOwner"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { OwnerBikeCard } from "../components/OwnerBikeCard"

const OwnerDashboard = () => {
    const ownerId = useSelector((state) => state.ownerAuth.ownerId);
    const { getRented, error, isLoading } = useGetRentedBikes();
    const [bikes, setBikes] = useState([]);
  
    useEffect(() => {
      getRented(ownerId, setBikes)
    }, []);
  
    return (
      <>
        <NavbarOwner />
        <Box
          sx={{
            mt:4,
            mb: 0,
            mx: 6,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" color="#00695c" fontWeight={500}>
              Uploaded Bikes
            </Typography>
        </Box>
        <Box pt={2} px={3}>
          <Grid container spacing={3}>
            {bikes.map((bike) => (
              <Grid item key={bike._id} md={12}>
                <OwnerBikeCard bike={bike} setBikes={setBikes} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  };
  
  export default OwnerDashboard;
  