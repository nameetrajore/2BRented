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
import { useLogin } from "../hooks/useLogin";
import { useLoginOwner } from "../hooks/useLoginOwner";
import { Navbar } from "../components/Navbar";

export const OwnerLogin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login, error, isLoading } = useLoginOwner();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.primary[100]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundImage: `url(${loginBackground})`,
          backgroundSize: "auto",
          backgroundPosition: "left bottom",
          height: "100vh",
        }}
        component="main"
      >
        <CssBaseline />
        <Grid item md={6}>
          <Box padding={10}>
            <Typography
              variant="h3"
              sx={{
                fontStyle: "italic",
                fontWeight: "bold",
              }}
              pb={2}
              color="#154B46"
            >
              2BRented
            </Typography>
            <Typography
              color="#154B46"
              variant="h5"
              sx={{ fontStyle: "italic" }}
            >
              Life's too short to ride the same old bike! Spice up your journey
              with a funky set of wheels from 2BRented Bike Rentals - because
              boring is not our style!{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          ml={"auto"}
          sx={{
            backgroundColor: "#DFF3F1",
            borderRadius: 0,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            display: "flex",
            alignItems: "center",
          }}
          component={Paper}
          p={9}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Avatar sx={{ mr: 2, bgcolor: "secondary.main" }}>
                <TwoWheelerIcon />
              </Avatar>
              <Typography
                component="h1"
                sx={{ fontWeight: "bold" }}
                variant="h4"
                mb={2}
                color="#154B46"
              >
                Owner Login
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
                error={error}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                label="Password"
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
                error={error}
              />
              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item mt={1}>
                  <Link
                    onClick={() => navigate("/login")}
                    varient="body2"
                    color="secondary"
                  >
                    Login as a Customer
                  </Link>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color="secondary">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    variant="body2"
                    color="secondary"
                    onClick={() => navigate("/sign-up-owner")}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OwnerLogin;
