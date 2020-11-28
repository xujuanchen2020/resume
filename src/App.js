import React from 'react';
import './App.css';
import { Container, Grid } from "@material-ui/core";
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Portfolio from './pages/Portfolio/Portfolio.js';
import Resume from './pages/Resume/Resume.js'

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg ={3} style={{background:"red"}}>
          <Profile/>
        </Grid>
        <Grid item xs style={{background:"blue"}}>
          <Header/>
          <Portfolio/>
          <Resume/>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
