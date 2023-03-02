import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import CategoryCard from '../Components/CategoryCard'

export const SearchPage = () => {
  const navigate = useNavigate()
  return (
    <Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} square elevation={0}>
      <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p:'20px'
            }}
          >
            <Typography component="h1" variant="h3">
              Search for your bike
            </Typography>
          </Box>
      </Grid>
      <Grid container spacing={5} padding={8}>
      <Grid item xs={6} sm={6} md={6}>
        <TextField
          margin="normal"
          fullWidth
          sx={{ mx: 1 }}
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <TextField
          fullWidth
          margin="normal"
          sx={{ mx: 1 }}
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <TextField
          fullWidth
          margin="normal"
          sx={{ mx: 1 }}
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <TextField
          fullWidth
          margin="normal"
          sx={{ mx: 1 }}
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Grid>
    </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} square elevation={0}>
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" sx={{ mb: 1, mt: 1}} onClick = {()=>navigate('bike-catalouge')}>Submit</Button>
        </Box>
      
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} square elevation={0}>
      <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p:'20px'
            }}
          >
            <Typography component="h1" variant="h3">
              Category
            </Typography>
          </Box>
      </Grid>
      
      <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              p:'20px'
            }}
          >
          <CategoryCard
            categoryName={'bike'}
          />
          <CategoryCard
            categoryName={'bike'}
          />
          <CategoryCard
            categoryName={'bike'}
          />
          
      </Box>
      
    </Grid>
  )
}
