import React from 'react'
import myImage from '../../images/image.jpeg'
import {Typography} from '@material-ui/core'
import './ProfileStyle.css'
import MyTimeline from '../Timeline/Timeline'
import reusableData from '../../utils/reuseData'
import FaceIcon from '@material-ui/icons/Face'
import MyButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{reusableData.name}</Typography>
                <Typography className='title'>{reusableData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={myImage} alt='photo'/>
            </figure>
            <div className='profile_info'>
                <MyTimeline  icon={<FaceIcon/>}/>
                <div className='button_container'>
                <MyButton text={"Download CV"} icon={<GetAppIcon/>}/>
                </div>
            </div>
        </div>
    )
}

export default Profile
