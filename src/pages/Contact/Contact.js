import React from 'react'
import './ContactStyle.css'
import { Grid, TextField, Typography } from "@material-ui/core";
import MyButton from '../../components/Button/Button'
import reuseData from '../../utils/reuseData'

const Contact = () => {
    return (
        <>
        {/* Contact me */}
        <Grid container spacing='5' className='section pb_45 p_30'>
            <Grid item xs={12} lg={6}>
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant='h6'>Contact Form</Typography>
            </Grid>

            <Grid item xs={12}>
                <form>
                <Grid container spacing="3">
                        <Grid item xs={12} md={6}>
                            

                            <TextField fullWidth name='name' label='Name'/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth name='email' label='Email'/>  
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth name='message' label='Message' multiline rows='4'/>
                        </Grid>
                        <Grid item xs={12}> 
                            <MyButton text="Submit" />
                        </Grid>
                    </Grid>
                
                </form>
                </Grid>
            </Grid>
            
            {/* Contact Information */}
            <Grid item xs={12} lg={5}>
                <Grid item className="section_title mb_30">
                    <span></span>
                    <Typography variant='h6'>Contact Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography className='contactInfo_item'>
                                <span>Address: </span> {reuseData.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className='contactInfo_item'>
                                <span>Phone: </span> {reuseData.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className='contactInfo_item'>
                                <span>Email: </span><a href="mailto:{reuseData.email}"> {reuseData.email} </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className='contactInfo_item'>
                                <span>Job: </span> {reuseData.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Contact
