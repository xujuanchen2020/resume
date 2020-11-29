import React from 'react'
import myImage from '../../images/image.jpeg'
import {Typography} from '@material-ui/core'
import './ProfileStyle.css'
import reuseData from '../../utils/reuseData'
import MyButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{reuseData.name}</Typography>
                <Typography className='title'>{reuseData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={myImage} alt='photo'/>
            </figure>
            <div className='profile_info'>
                <div className='social_icons'>
                    {Object.keys(reuseData.socials).map(key=>
                    (<a href={reuseData.socials[key].link} target='_blank'>
                        {reuseData.socials[key].icon}
                    </a>))}
                </div>
                <div className='button_container'>
                <MyButton text={"Download CV"} icon={<GetAppIcon/>}/>
                </div>
            </div>
        </div>
    )
}

export default Profile
