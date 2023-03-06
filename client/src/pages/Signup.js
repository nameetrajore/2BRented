import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';
import { AadharVeri } from './AadharVeri';
import { useSignup } from '../hooks/useSignup';
import { useNavigate } from 'react-router';

export const Signup = () => {
    

    const [userName, setName] = useState('')
    const [userAddress, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [DL, setDL] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        console.log(email, password, userAddress, userName, phone, DL);
        await signup(userName,userAddress,phone, email,password, DL)
        
      };
      // const navigate = useNavigate()
      return (
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Signup
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => setName(e.target.value)} 
                    value = {userName}   
                    id="userName"
                    label="Name"
                    name="userName"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => setAddress(e.target.value)} 
                    value = {userAddress}   
                    id="userAddress"
                    label="Address"
                    name="userAddress"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)} 
                    value = {email}   
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)} 
                    value = {phone}   
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth          
                    onChange={(e) => setPassword(e.target.value)}    
                    value = {password}      
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth   
                    onChange={(e) => setDL(e.target.value)}  
                    value = {DL}           
                    name="DL"
                    label="DL number"
                    type="password"
                    id="DL"
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isLoading}
                  >
                    Submit
                  </Button>
                  {error && <div className='"error'>{error}</div>}
                </Box>
              </Box>
            </Grid>
          </Grid>
      );
}

export default Signup
