import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import signUpBackground from "../resources/signUpBackground.svg";
import Typography from "@mui/material/Typography";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"; // import { useNavigate } from 'react-router-dom';
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@mui/material";

export const Signup = () => {
  const navigate = useNavigate();
  const [userName, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [DL, setDL] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(
      userName,
      { city, pincode, state, address },
      phone,
      email,
      password,
      DL
    );
  };
  return (
    <Grid
      container
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.primary[100]
            : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundImage: `url(${signUpBackground})`,
        backgroundSize: "auto",
        backgroundPosition: "left bottom",
        height: "100vh",
      }}
      component="main"
    >
      <CssBaseline />
      <Grid item md={4}>
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
          <Typography color="#154B46" variant="h5" sx={{ fontStyle: "italic" }}>
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
        md={6}
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
              Sign Up
            </Typography>
          </Box>
          <Typography
            component="h5"
            sx={{ fontStyle: "italic" }}
            color="#154B46"
          >
            Fringilla urna porttitor rhoncus dolor purus non enim praesent
            elementum facilisis leo vel fringilla est ullamcorper eget nulla
            facilisi etiam{" "}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 4 }}
          >
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  value={userName}
                  id="userName"
                  label="Name"
                  name="userName"
                  autoFocus
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  label="City"
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  label="State"
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setPincode(e.target.value)}
                  value={pincode}
                  label="Pincode"
                  name=""
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  label="Address"
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  color="secondary"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setDL(e.target.value)}
                  value={DL}
                  name="DL"
                  label="DL number"
                  type="password"
                  id="DL"
                  color="secondary"
                />
              </Grid>
              <Grid item md={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="I agree to the Terms and Conditions and Privacy Policy"
                  sx={{}}
                />
              </Grid>
              <Grid item md={4}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item md={12}>
                <Link
                  variant="body2"
                  color="secondary"
                  onClick={() => navigate("/login")}
                >
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            {error && <div className='"error'>{error}</div>}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
