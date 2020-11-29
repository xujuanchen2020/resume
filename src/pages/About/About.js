import React from 'react'
import './AboutStyle.css'
import { Container, Grid, Typography } from "@material-ui/core";
import reuseData from '../../utils/reuseData'

const About = () => {
    return (
        <>
        {/* About me */}
        <Grid container className='section pb_45 p_30'>
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant='h6'>About me</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant='body3' className='aboutme_text'>{reuseData.about}</Typography>
            </Grid>

        </Grid>

        {/* Education and experience */}
        <Grid className='section'>
            
        </Grid> 

        {/* Education and experience */}
        <Grid className='section'>
        
        </Grid> 

        {/* Education and experience */}
        <Grid className='section'>
        
        </Grid> 

        {/* Education and experience */}
        <Grid className='section'>
        
        </Grid> 
        </>
    )
}

export default About
