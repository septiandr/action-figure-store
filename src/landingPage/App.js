import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ResponsiveAppBarr from '../component/nav';
import ResponsiveAppBar from '../component/navbar';
import data from './../data.json'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import luffy from '../image/index.jpg'

function App() {
  console.log()
  return (
    <>
    <ResponsiveAppBar/>
      <Container maxWidth="xl" sx={{bgcolor:'#000000', height:'100vh',pt:15,display:'flex',flexDirection:'row'}}>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            <div style={{background:'rgba(255, 255, 255, 0.12)',borderRadius:'5px',padding:'20px 30px 50px 30px', width:'100%',height:"60%"}}>
              <div className='name'>
                <Typography sx={{color:'rgba(255, 255, 255, 0.7)',fontWeight:'800'}} variant='h2'>
                  Mugiwara No Luffy
                </Typography>
              </div>
              <div className='aboutme' style={{marginTop:'20px'}}>
                <Typography style={{fontWeight:200,flexWrap:'wrap',display:'flex',color:'#fff'}} variant='h5'>{data[0].profil.aboutme}</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <img src={luffy} className='photo' style={{background:'#eaeaea',objectFit:'cover'}} alt='photo'/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
