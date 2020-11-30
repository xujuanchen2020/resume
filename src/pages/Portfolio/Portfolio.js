import React from 'react'
import './PortfolioStyle.css'
import { Card, Grid, Typography, Tab, Tabs, CardMedia, CardContent, Grow, CardActionArea, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { useState } from 'react'
import reuseData from '../../utils/reuseData'

const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false)

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
                            className={tabValue == tag 
                                ? "customTabs_item active" 
                                : "customTabs_item"}/>)                        
                        )
                        }
                </Tabs>
                {/* Projects */}
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        {reuseData.projects.map((project) =>(
                        <>
                        {tabValue == project.tag || tabValue == "All" ? (
                        <Grid item xs={12} sm={12} md={6}> 
                        <Grow in timeout={1000}>
                            <Card className="customCard" onClick={() => setProjectDialog(project)}>
                                <CardActionArea>

                                    <CardMedia className="customCard_image" 
                                        image={project.image} title={project.title}/>
                                    
                                    <CardContent>
                                        <Typography variant="body3" className="customCard_title">{project.title}</Typography>
                                        <Typography variant="body2" className="customCard_caption">{project.caption }</Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grow>
                        </Grid>

                        ) : null}
                        </>
                        ))}
                    </Grid>
                </Grid>

                <Dialog className="projectDialog" open={projectDialog} onClose={() => setProjectDialog(false)}>
                    <DialogTitle variant="body3" onClose={() => setProjectDialog(false)}> 
                        {projectDialog.title} 
                    </DialogTitle>

                    <img src={projectDialog.image} alt="Project Images" className="projectDialog_image" />

                    <DialogContent>
                        <Typography variant="body2" className="projectDialog_description">
                            {projectDialog.description}
                        </Typography>
                    </DialogContent>

                    <DialogActions>
                        <Typography className="projectDialog_actions">
                            {projectDialog?.links?.map((link) => (
                                <a href={link.link} target="_blank" className="projectDialog_icon">{link.icon}</a> ))
                            } 
                        </Typography>
                    </DialogActions>
                </Dialog>

            </Grid>
        </Grid>
        </>
    )
}

export default Portfolio
