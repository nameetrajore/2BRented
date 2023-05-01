import React from "react";
import { Avatar, Button, Grid, Paper, Rating, Typography } from "@mui/material";

const ProfilePage = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Avatar src="/avatar.jpg" sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item>
              <Typography variant="h4">John Doe</Typography>
              <Typography variant="subtitle1">Software Engineer</Typography>
              <Typography variant="subtitle2">San Francisco, CA</Typography>
              {/* <Button variant="outlined" sx={{ marginTop: 2 }}> */}
              {/*   Edit Profile */}
              {/* </Button> */}
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Phone: (123) 456-7890
              </Typography>
              <Typography variant="body1">
                Email: john.doe@example.com
              </Typography>
              <Typography variant="body1">
                Address: 123 Main St, San Francisco, CA
              </Typography>
              <Rating name="rating" value={4.5} precision={0.5} readOnly />
            </Grid>
          </Grid>
          <Typography variant="h5" sx={{ marginTop: 4 }}>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - JavaScript
            <br />
            - React
            <br />
            - Node.js
            <br />- HTML/CSS
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
