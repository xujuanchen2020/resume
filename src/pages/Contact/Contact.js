import React, {Component} from 'react'
import './ContactStyle.css'
import { Grid, TextField, Typography } from "@material-ui/core";
import reuseData from '../../utils/reuseData'
import * as emailjs from 'emailjs-com';

export class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            phone : "",
            email : "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_jisim6p", 'template_p0mwsdu', '.contact_form_class', 'user_pJzp4mA0TWv9n4LulqeiZ')
        .then()
        .catch();
        this.setState({name:"",phone:"",email:"",message:""});
    };

render(){
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
                <form onSubmit={this.handleSubmit.bind(this)} className="contact_form_class">
                <Grid container spacing="3">
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth type="text" label="Name" name="name" placeholder="Enter name" 
                            value={this.state.name} onChange={this.handleChange.bind(this)}/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField fullWidth type="text" label="Phone" name="phone" placeholder="Enter phone"
                            value={this.state.phone} onChange={this.handleChange.bind(this)}/>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField fullWidth type="email" label="Email" name="email" placeholder="Enter email"
                            value={this.state.email} onChange={this.handleChange.bind(this)}/>  
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth name='message' label='Message' multiline rows='4'
                            value={this.state.message} onChange={this.handleChange.bind(this)}/>
                        </Grid>

                        <Grid item xs={12}> 
                            <input class="custom_btn" type="submit" />
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

                        <Grid item xs={12}>
                            <Typography className='contactInfo_item'>
                                {reuseData.thanks}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}
}

export default Contact
