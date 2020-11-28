import React from 'react'
import myImage from '../../images/image.jpeg'
import {requirePropFactory, Typography} from '@material-ui/core'
import './ProfileStyle.css'
import MyTimeline from '../Timeline/Timeline'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Xujuan Chen</Typography>
                <Typography className='title'>Web Developer</Typography>
            </div>
            <figure className='profile_image'>
                <img src={myImage} alt='photo'/>
            </figure>
            <div className='profile_info'>
                <MyTimeline/>
                <br/>
                <button>button</button>
            </div>
        </div>
    )
}

export default Profile
