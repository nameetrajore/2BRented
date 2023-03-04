import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import BikeCard from '../components/BikeCard'

export const BikeCatalouge = () => {

  const [notes, setNotes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])

  return (
    <div>
      <Grid container md={6}></Grid>
      <Grid container md={6}>
      {notes.map(note => (
        <Grid item key={note.id} xs={12} md={6} lg = {4}>
          <BikeCard note ={note}/>
        </Grid>
      ))}
      </Grid>
      
    </div>
  );
}
