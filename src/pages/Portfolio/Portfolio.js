import React from 'react'
import './PortfolioStyle.css'
import { Grid, Typography } from "@material-ui/core";

const Portfolio = () => {
    return (
        <>
        {/* Portfolio */}
        <Grid container className='section pb_45 p_30'>
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant='h6'>Portfolio</Typography>
            </Grid>

        </Grid>
        </>
    )
}

export default Portfolio
