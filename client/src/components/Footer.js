import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f5f5f5",
    padding: "24px 0",
    mt: 6,
    bottom: 0,
  };

  const textStyles = {
    fontSize: "18px",
    textAlign: "center",
    color: "#000",
  };

  return (
    <Box sx={footerStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={textStyles} gutterBottom>
              Links
            </Typography>
            <Typography sx={textStyles}>
              <Link href="/about" color="inherit" underline="hover">
                About
              </Link>
            </Typography>
            <Typography sx={textStyles}>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
            </Typography>
            <Typography sx={textStyles}>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={textStyles} gutterBottom>
              Social
            </Typography>
            <Typography sx={textStyles}>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="hover"
              >
                Facebook
              </Link>
            </Typography>
            <Typography sx={textStyles}>
              <Link
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="hover"
              >
                Twitter
              </Link>
            </Typography>
            <Typography sx={textStyles}>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="hover"
              >
                LinkedIn
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={textStyles} gutterBottom>
              Address
            </Typography>
            <Typography sx={textStyles}>123 Main Street</Typography>
            <Typography sx={textStyles}>Suite 69</Typography>
            <Typography sx={textStyles}>Funkytown, Bruh 12345</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={textStyles} gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={textStyles}>Phone: (000) 000000 </Typography>
            <Typography sx={textStyles}>Email: NoEmail@2BRented.com</Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ ...textStyles, marginTop: "24px" }}>
          © 2023 2BRented. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
