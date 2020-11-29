import React from 'react'
import './ResumeStyle.css'
import { Grid, Typography } from "@material-ui/core";
import MyTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline.js';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import reuseData from '../../utils/reuseData';
import { TimelineItem, TimelineSeparator, 
    TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';

const Resume = () => {
    return (
        <>
        {/* Resume */}
        <Grid container className='section pb_45 p_30'>
            <Grid item className="section_title">
                <span></span>
                <Typography variant='h6'>Resume</Typography>
            </Grid>
        </Grid>
        <Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <MyTimeline 
                        title="Work Experience" 
                        icon={<WorkIcon/>}>
                            {
                            reuseData.experience.map(experience =>(
                            <TimelineItem>
                                <CustomTimelineSeparator/>
                                <TimelineContent>
                            <Typography className="timeline_title">{experience.title}</Typography>
                            <Typography className="timeline_date" variant="caption">{experience.date}</Typography>
                            <Typography className="timeline_description" variant="body2">{experience.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>)) 
                            }
                        </MyTimeline>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <MyTimeline 
                        title="Education" 
                        icon={<SchoolIcon/>}>
                            {
                            reuseData.education.map(education =>(
                            <TimelineItem>
                                <CustomTimelineSeparator/>
                                <TimelineContent>
                            <Typography className="timeline_title">{education.title}</Typography>
                            <Typography className="timeline_date" variant="caption">{education.date}</Typography>
                            <Typography className="timeline_description" variant="body2">{education.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>)) 
                            }
                        </MyTimeline>
                    </Grid>
                </Grid>
            </Grid>
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

export default Resume
