import React from 'react'
import './ContactStyle.css'
import { Grid, Typography } from "@material-ui/core";

const Contact = () => {
    return (
        <>
        {/* Contact me */}
        <Grid container className='section pb_45 p_30'>
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant='h6'>Contact me</Typography>
            </Grid>

        </Grid>
        </>
    )
}

export default Contact
