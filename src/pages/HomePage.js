import React from "react";
import SearchComponent from "../components/customerHomePage/searchComponent";
import ShieldIcon from "@mui/icons-material/Shield";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import { Navbar } from "../components/Navbar";
import { Avatar, Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";
import illustration from "../resources/undraw_web_search_re_efla.svg";
import { useNavigate, createSearchParams } from "react-router-dom";

const steps = [
  {
    n: "01",
    title: "Book",
    desc: "Choose your bike and book for a minimum of 24 hours.",
    icon: <AccessTimeIcon sx={{ fontSize: 28, color: "white" }} />,
  },
  {
    n: "02",
    title: "Pay deposit",
    desc: "Pay a fully refundable security deposit to confirm.",
    icon: <LocalAtmIcon sx={{ fontSize: 28, color: "white" }} />,
  },
  {
    n: "03",
    title: "Pick up",
    desc: "Collect the bike from a location near you.",
    icon: <LocationCityIcon sx={{ fontSize: 28, color: "white" }} />,
  },
  {
    n: "04",
    title: "Enjoy the ride",
    desc: "Hit the road with up to 150 km included.",
    icon: <TwoWheelerIcon sx={{ fontSize: 28, color: "white" }} />,
  },
];

const features = [
  {
    icon: <ShieldIcon sx={{ fontSize: 32, color: "#154B46" }} />,
    title: "Protected Rides",
    desc: "Every booking is backed by 2BRented's guarantee. Ride with full confidence.",
  },
  {
    icon: <LocationCityIcon sx={{ fontSize: 32, color: "#154B46" }} />,
    title: "Pickup Near You",
    desc: "Find bikes listed in your neighbourhood — no long commutes to collect.",
  },
  {
    icon: <SportsMotorsportsIcon sx={{ fontSize: 32, color: "#154B46" }} />,
    title: "150 km Free Usage",
    desc: "Every rental includes 150 km at no extra charge. Just ride.",
  },
];

const cities = ["Mumbai", "Bangalore", "Hyderabad", "Delhi", "Chennai", "Jaipur"];

export const SearchPage = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().substring(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().substring(0, 10);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #154B46 0%, #1e7d74 45%, #33b3a6 100%)",
          display: "flex",
          flexDirection: "column",
          minHeight: "60vh",
          position: "relative",
          overflow: "hidden",
          "& .MuiAppBar-root": { background: "transparent", boxShadow: "none" },
        }}
      >
        <Navbar />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pb: 10,
            pl: { xs: 3, md: 8, lg: 14 },
          }}
        >
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Typography
              variant="h2"
              color="white"
              fontWeight={700}
              sx={{ letterSpacing: -1, lineHeight: 1.15 }}
            >
              Rent.<br />Ride.<br />Explore India.
            </Typography>
            <Typography variant="h6" color="rgba(255,255,255,0.75)" mt={2} fontWeight={400}>
              Book bikes by the day across 50+ cities — no fuss, just ride.
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={illustration}
          alt=""
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            height: "90%",
            width: "auto",
            pointerEvents: "none",
            userSelect: "none",
            display: { xs: "none", lg: "block" },
          }}
        />
      </Box>

      {/* ── Search card ────────────────────────────────────────────── */}
      <SearchComponent />


      {/* ── How it works ───────────────────────────────────────────── */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} color="#154B46" textAlign="center" mb={8}>
            How it works
          </Typography>

          {/* Stepper row */}
          <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
            {/* Dashed connecting line between circles */}
            <Box
              sx={{
                position: "absolute",
                top: 32,
                left: "12.5%",
                right: "12.5%",
                borderTop: "2px dashed rgba(21,75,70,0.2)",
                zIndex: 0,
              }}
            />
            {steps.map(({ n, title, desc, icon }) => (
              <Box
                key={n}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  zIndex: 1,
                  px: { xs: 1, md: 2 },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: "#154B46",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    boxShadow: "0 4px 20px rgba(21,75,70,0.25)",
                  }}
                >
                  <Typography sx={{ color: "white", fontWeight: 900, fontSize: 13, lineHeight: 1 }}>
                    {n}
                  </Typography>
                  {icon}
                </Box>
                <Typography variant="subtitle1" fontWeight={700} color="#154B46" textAlign="center">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" mt={0.5}>
                  {desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Stats + Browse by City (merged) ────────────────────────── */}
      <Box sx={{ bgcolor: "#E8F5F3", py: 8 }}>
        <Container maxWidth="lg">
          {/* Browse by City */}
          <Typography variant="h4" fontWeight={700} color="#154B46" textAlign="center" mb={1}>
            Browse by City
          </Typography>
          <Typography variant="body1" color="#1e7d74" textAlign="center" mb={4}>
            Find bikes available in your city right now.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {cities.map((city) => (
              <Chip
                key={city}
                label={city}
                icon={<LocationCityIcon />}
                onClick={() =>
                  navigate(
                    `/bike-catalogue?${createSearchParams({
                      pickupLocation: city,
                      dropLocation: city,
                      pickupDate: today,
                      dropDate: tomorrow,
                    })}`
                  )
                }
                sx={{
                  px: 1.5,
                  py: 2.5,
                  fontSize: 15,
                  fontWeight: 600,
                  bgcolor: "white",
                  border: "1px solid #c8e6e2",
                  color: "#154B46",
                  cursor: "pointer",
                  "& .MuiChip-icon": { color: "#154B46" },
                  "&:hover": {
                    bgcolor: "#154B46",
                    color: "white",
                    "& .MuiChip-icon": { color: "white" },
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Why 2BRented ───────────────────────────────────────────── */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} color="#154B46" textAlign="center" mb={7}>
            Why 2BRented?
          </Typography>
          {features.map(({ icon, title, desc }, index) => (
            <Box
              key={title}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                py: 4,
                borderBottom: index < features.length - 1 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <Avatar sx={{ bgcolor: "#b2ddd7", width: 68, height: 68, flexShrink: 0 }}>
                {icon}
              </Avatar>
              <Box>
                <Typography variant="h6" fontWeight={700} color="#154B46">{title}</Typography>
                <Typography variant="body1" color="text.secondary" mt={0.5}>{desc}</Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #154B46 0%, #1e7d74 45%, #33b3a6 100%)",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            color="white"
            fontWeight={700}
            sx={{ letterSpacing: -1 }}
          >
            Ready to explore India on two wheels?
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.75)" mt={2} fontWeight={400}>
            500+ bikes waiting. No commitment needed.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              mt: 5,
              color: "white",
              borderColor: "rgba(255,255,255,0.6)",
              borderWidth: 2,
              px: 6,
              py: 1.5,
              fontSize: 16,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "white",
                borderColor: "white",
                color: "#154B46",
              },
            }}
          >
            Find a Bike →
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
