import React from 'react'
import myImage from '../../images/image.jpeg'
import {requirePropFactory, Typography} from '@material-ui/core'
import './ProfileStyle.css'
import MyTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline'
import reusableData from '../../utils/reuseData'
import FaceIcon from '@material-ui/icons/Face'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'

// const MyTimelineItem = ({title, link, text}) => {
//     return(
//         <TimelineItem>
//         <CustomTimelineSeparator/>
//         <TimelineContent className="timeline_content">
//             {link?(
//                 <Typography className="timeline_text">
//                 <span>{title}:</span>{" "}
//                 <a href={link} target="_blank">{text}</a>
//                 </Typography>
//             ):(
//                 <Typography className="timeline_text">
//                 <span>{title}:</span>{text}
//                 </Typography>
//             )}
//         </TimelineContent>
//       </TimelineItem>
//     )
// }

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
                {/* <MyTimelineItem title="name" text={reusableData.name}/>
                <MyTimelineItem title="title" text={reusableData.title}/>
                <MyTimelineItem title="email" text={reusableData.email}/>
                {Object.keys(reusableData.socials).map(key =>(
                    <MyTimelineItem title={key} 
                    text={reusableData.socials[key].text}
                    link={reusableData.link}/>
                ))}
                <MyTimeline /> */}
                <br/>
                <button>button</button>
            </div>
        </div>
    )
}

export default Profile
