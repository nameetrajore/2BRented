import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#154B46", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <TwoWheelerIcon sx={{ color: "#33b3a6" }} />
              <Typography variant="h6" fontWeight={700} color="white" fontStyle="italic">
                2BRented
              </Typography>
            </Box>
            <Typography variant="body2" color="rgba(255,255,255,0.6)">
              India's peer-to-peer bike rental platform. Rent bikes by the day,
              across 50+ cities.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">Home</Link>
              <Link href="/bike-catalogue" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">Browse Bikes</Link>
              <Link href="/support" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">Support</Link>
              <Link href="/login-owner" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">List Your Bike</Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.6)">support@2brented.in</Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.6)" mt={0.5}>+91 98765 43210</Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.6)" mt={0.5}>
              Mon–Sat, 9 AM – 6 PM IST
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">Instagram</Link>
              <Link href="https://www.twitter.com/" target="_blank" rel="noopener" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">Twitter / X</Link>
              <Link href="https://www.linkedin.com/" target="_blank" rel="noopener" color="rgba(255,255,255,0.6)" underline="hover" variant="body2">LinkedIn</Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", mt: 5, pt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="rgba(255,255,255,0.4)">
            © {new Date().getFullYear()} 2BRented. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
