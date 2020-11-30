import React from 'react'
import './PortfolioStyle.css'
import { Card, Grid, Typography, Tab, Tabs, CardMedia, CardContent, Grow } from "@material-ui/core";
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

            {/* Tabs */}
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
                {/* Projects */}
                <Grid item xs={12}>
                    <Grid container spacing={5} className="">
                        {reuseData.projects.map((project) =>(
                        <>
                        {tabValue == project.tag || tabValue == "All" ? (
                        <Grid item>
                        <Grow in timeout={1000}>
                            <Card>
                                <CardMedia />
                                <CardContent>
                                    <Typography>{project.title}</Typography>
                                    <Typography>{project.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grow>
                        </Grid>

                        ) : null}
                        </>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Portfolio
