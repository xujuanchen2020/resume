import React from 'react';
import './FooterStyle.css';
import Typography from '@material-ui/core/Typography';
import reuseData from '../../utils/reuseData';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
    <Typography className='footer_name'>{reuseData.name}</Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    Designed and Developed by Xujuan Chen
                    <br/>
                    Clone idea from 
                    <a href='https://themeforest.net/user/tavonline' 
                    target='_blank'> tavonline</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
