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
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
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
        backgroundPosition: "left bottom",
        minHeight: "100vh",
      }}
      component="main"
    >
      <CssBaseline />
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Box padding={10}>
          <Typography
            variant="h3"
            sx={{ fontStyle: "italic", fontWeight: "bold" }}
            pb={2}
            color="#154B46"
          >
            2BRented
          </Typography>
          <Typography color="#154B46" variant="h5" sx={{ fontStyle: "italic" }}>
            Rent a bike for a day, a week, or longer. Explore India on your
            terms with 2BRented.
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
          borderTopLeftRadius: { md: 20 },
          borderBottomLeftRadius: { md: 20 },
          display: "flex",
          alignItems: "center",
        }}
        component={Paper}
        p={9}
      >
        <Box sx={{ my: 4, mx: 4, display: "flex", flexDirection: "column", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
            <Avatar sx={{ mr: 2, bgcolor: "secondary.main" }}>
              <TwoWheelerIcon />
            </Avatar>
            <Typography
              component="h1"
              sx={{ fontWeight: "bold" }}
              variant="h4"
              color="#154B46"
            >
              Sign Up
            </Typography>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setName(e.target.value)}
                  value={userName}
                  id="name"
                  label="Full Name"
                  autoFocus
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  id="city"
                  label="City"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  id="state"
                  label="State"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setPincode(e.target.value)}
                  value={pincode}
                  id="pincode"
                  label="Pincode"
                  type="number"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required fullWidth
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  id="address"
                  label="Address"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  onChange={(e) => setDL(e.target.value)}
                  value={DL}
                  id="dl"
                  label="Driving License Number"
                  type="text"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="agree" color="primary" />}
                  label="I agree to the Terms and Conditions and Privacy Policy"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                >
                  Create Account
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link
                  variant="body2"
                  color="secondary"
                  onClick={() => navigate("/login")}
                  sx={{ cursor: "pointer" }}
                >
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
            {error && (
              <Typography color="error" mt={2}>
                Signup failed. Please check your details and try again.
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
