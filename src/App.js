import React from 'react';
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Portfolio from './pages/Portfolio/Portfolio.js';
import Resume from './pages/Resume/Resume.js';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg ={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
          <Router>
            <Header/>
            <div className='main-content'>
              <Switch>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/">
                  <About />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
