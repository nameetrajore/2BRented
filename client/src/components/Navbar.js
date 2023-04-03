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
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // console.log(user[0].customerName, "this is the logged in user")
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 0,
        p: 1,
        /* boxShadow: 3, */
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <AppBar position="relative" color="transparent" sx={{}}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            color="secondary"
            sx={{ flexGrow: 1, mt: 0, fontWeight: "700", fontStyle: "italic" }}
            onClick={() => navigate("/")}
          >
            2BRENTED
          </Typography>

          {/* {user && ( */}
          {/*   <div> */}
          {/*     <span>Welcome, {user[0].customerName}</span> */}

          {/*     <Button color="inherit" onClick={handleClick} size="large"> */}
          {/*       Logout */}
          {/*     </Button> */}
          {/*   </div> */}
          {/* )} */}
          {/* {!user && ( */}
          {/*   <div> */}
          {/*     <Button */}
          {/*       color="primary" */}
          {/*       onClick={() => navigate("login")} */}
          {/*       variant="contained" */}
          {/*       size="large" */}
          {/*     > */}
          {/*       Login */}
          {/*     </Button> */}
          {/*   </div> */}
          {/* )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
