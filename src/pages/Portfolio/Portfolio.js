import React from 'react'
import './PortfolioStyle.css'
import { Grid, Typography, Tab, Tabs } from "@material-ui/core";
import { useState } from 'react'
import reuseData from '../../utils/reuseData'

const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");

    return (
        <>
        {/* Portfolio */}
        <Grid container className='section pb_45 p_30'>
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant='h6'>Portfolio</Typography>
            </Grid>

            <Grid item xs={12}>
                <Tabs
                    value = {tabValue}
                    indicatorColor = "white"
                    className = "custom_tabs"
                    onChange={(event, newValue)=>setTabValue(newValue)}>
                        <Tab 
                        label="All" 
                        value="All" 
                        className={
                            tabValue == "All" ? "customTabs_item active" : "customTabs_item"} 
                        />
                        
                        {[...new Set(reuseData.projects.map((item) => item.tag))].map
                        (
                            (tag) => (<Tab label={tag} value={tag} 
                            className={tabValue == "All" ? "customTabs_item active" : "customTabs_item"}/>)
                         
                        )
                        }
                </Tabs>
            </Grid>
        </Grid>
        </>
    )
}

export default Portfolio
