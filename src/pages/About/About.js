import React from 'react'
import './AboutStyle.css'
import { Grid, Typography } from "@material-ui/core";
import reuseData from '../../utils/reuseData'
import Icon from '@material-ui/core/Icon';

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
                <Typography variant='body2' className='aboutme_text'>{reuseData.about}</Typography>
            </Grid>
        </Grid>

        {/* Jobs */}
        <Grid container className="section pb_45 p_30">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Jobs looking for</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} justify="space-around">
                    {reuseData.jobs.map(jobs => (
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="jobs">
                    <Icon className='jobs_icon'>{jobs.icon}</Icon>
                    <Typography className="jobs_title">{jobs.title}</Typography>
                    <Typography className="jobs_description" variant="body3">{jobs.description}</Typography>
                        </div>
                    </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default About
