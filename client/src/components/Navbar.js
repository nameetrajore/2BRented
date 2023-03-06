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
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  // console.log(user[0].customerName, "this is the logged in user")
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

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
          {
            user && (
              <div>
                <span>Welcome, {user[0].customerName}</span>
                
                <Button
                  color="inherit"
                  onClick={handleClick}
                  size="large"
                >
                  Logout
                </Button>
              </div>
            )
          }
          {!user &&(
            <div>
              <Button
                color="inherit"
                onClick={() => navigate("login")}
                size="large"
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
