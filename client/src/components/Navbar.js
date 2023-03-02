import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, mt: 0 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, mt: 0, fontWeight: "900" }}
            onClick={() => navigate("/")}
          >
            2BRented
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate("login")}
            size="large"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
