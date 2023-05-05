import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "white",
      color: "#1e7d74",
    },
    children: `${name.toUpperCase().split(" ")[0][0]}`,
  };
}

export const NavbarManager = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.managerAuth.manager);
  const { logout } = useLogout();
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    localStorage.clear();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 0,
        /* boxShadow: 3, */
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <AppBar
        position="relative"
        color="primary"
        sx={{
          p: 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            color="white"
            sx={{ mt: 0, fontWeight: "700", fontStyle: "italic" }}
            onClick={() => navigate("/manager-dashboard")}
          >
            2BRENTED<span style={{ color: "black" }}>MANAGERS</span>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", mr: 2 }}
              onClick={() => navigate("/manager-dashboard")}
            >
              Home
            </Button>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", mr: 2 }}
              onClick={() => navigate("/manager-dashboard-customers")}
            >
              Customers
            </Button>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", mr: 2 }}
              onClick={() => navigate("/manager-dashboard-owners")}
            >
              Owners
            </Button>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", mr: 2 }}
              onClick={() => navigate("/manager-dashboard-bikes")}
            >
              Bikes
            </Button>
            {user && (
              <>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleAvatarClick}
                >
                  <Avatar {...stringAvatar(user)} />{" "}
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
          {!user && (
            <div>
              <Button
                onClick={() => navigate("/login")}
                variant="text"
                size="large"
                sx={{
                  color: "white",
                }}
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
