import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper'
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid'
import BikeCard from '../components/BikeCard'
import TextField from "@mui/material/TextField";
import { Card, Drawer } from '@mui/material'
import { createTheme } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react'

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderBottom: 3,
  borderColor: '#ffea00'
};

// const useStyles = makeStyles({
//   paper: {
//     width: "100%",
//     minHeight: "100vh",
//     backgroundColor: 'grey'
//   },
//   card: {
//     backgroundColor: 'blue'
//   }
// });

// const usestyle = makeStyles({
//   drawer:{
//     width: drawerWidth
//   }
// })

// const drawer = (
//   <div>
//     <Toolbar />
//     <Divider />
//     <List>
//       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//         <ListItem key={text} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <List>
//       {['All mail', 'Trash', 'Spam'].map((text, index) => (
//         <ListItem key={text} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//   </div>
// );

export const BikeCatalouge = () => {

  const [notes, setNotes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])
  // const classes = useStyles();
  return (
    <div>
      <Box m={5} 
      borderBottom={2}
      
      maxWidth="500vh"
      pb={3}
      margin={0}
      padding={3}
      sx={{
          ...commonStyles,
          display: "flex",
          flexDirection: "row",
          
        }}>
        <Grid container spacing={8} alignItems="center" justifyContent="center" >
          <Grid item >
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Pickup Location"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </Grid>
          
          <Grid item >
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Pickup Location"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </Grid>
          <Grid item >
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Pickup Location"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </Grid>
          <Grid item >
          <TextField
            fullWidth
            margin="none"
            required
            id="email"
            label="Pickup Location"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </Grid>
          {/* <Grid item>
            <Button
              variant="contained"
              sx={{ mb: 1, mt: 1 }}
              // onClick={() => navigate("bike-catalouge")}
              size="large"
            >
              Submit
            </Button>
        </Grid> */}
        </Grid>
      </Box>
      <Grid container>
      <Grid item md={3}> 
      {/* <Box sx={{ height: '100%' }}>
        <Paper elevation={10} className={classes.paper} >
        <Card className={classes.card}>
          <h1>hello</h1>
        </Card>
        </Paper>
      </Box> */}
       
      </Grid>
      <Grid item md={9}>
        <Grid container>
      {notes.map(note => (
        <Grid item key={note.id} xs={12} md={3} lg = {4}>
          <BikeCard note ={note}/>
        </Grid>
      ))}
      </Grid>
      </Grid>
      </Grid>
      
    </div>
  );
}
