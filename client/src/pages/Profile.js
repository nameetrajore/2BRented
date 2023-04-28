import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  createStyles,
  Divider,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabPanelStyles = createStyles({
    tabPanel: {
      padding: "24px",
    },
  });

  const headerStyles = createStyles({
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px",
    },
    avatar: {
      width: "100px",
      height: "100px",
      marginRight: "16px",
    },
    followButton: {
      backgroundColor: "#2196F3",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#1565C0",
      },
    },
    editButton: {
      color: "#757575",
    },
    divider: {
      margin: "16px 0",
    },
  });

  const aboutStyles = createStyles({
    about: {
      marginBottom: "16px",
    },
  });

  const tabsStyles = createStyles({
    root: {
      borderRight: "1px solid #ddd",
    },
    indicator: {
      backgroundColor: "#2196F3",
    },
  });

  return (
    <div>
      <Box display="flex" alignItems="center" mb={4}>
        <Typography variant="h4">Profile</Typography>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          className={tabsStyles.root}
          classes={{ indicator: tabsStyles.indicator }}
        >
          <Tab label="About" />
          <Tab label="Photos" />
          <Tab label="Videos" />
          <Tab label="Friends" />
          <Tab label="Groups" />
        </Tabs>
        <Paper square elevation={0} style={tabPanelStyles}>
          <Box className="header" style={headerStyles.header}>
            <Avatar
              src="https://i.pravatar.cc/150"
              alt="Profile Picture"
              style={headerStyles.avatar}
            />
            <Box>
              <Typography variant="h5">John Doe</Typography>
              <Typography variant="subtitle1">Los Angeles, CA</Typography>
              <Button variant="contained" style={headerStyles.followButton}>
                Follow
              </Button>
            </Box>
          </Box>
          <IconButton style={headerStyles.editButton}>
            <EditIcon />
          </IconButton>
          <Divider style={headerStyles.divider} />
          <Box className="about" style={aboutStyles.about}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum nisl sed purus feugiat, vitae convallis quam dapibus. Etiam
              sit amet ligula mi. Nulla nec nulla massa. Nunc vulputate orci at
              arcu efficitur, non elementum lacus tincidunt. Duis auctor urna
              vel quam tempor bibendum. Quisque a nunc ullamcorper, vehiculaenim
              ut, bibendum arcu. Sed ut sapien a libero blandit auctor. Donec
              congue porttitor nulla sed facilisis.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Profile;
