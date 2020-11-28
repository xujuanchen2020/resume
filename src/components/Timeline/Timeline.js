import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './TimelineStyle.css';
import { Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';

const MyTimeline = ({title, children, icon}) => {
    return (
        <Timeline className="timeline">
            
          <TimelineItem className="timeline_firstItem">
            <TimelineSeparator>
                <TimelineDot className="timeline_dot_header">
                    {<WorkIcon/>}
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='h6' className={'timeline_header'}>
                    {"title"}
                </Typography>
            </TimelineContent>
          </TimelineItem>
          {children}

          <TimelineItem>
            <TimelineSeparator className="timeline_separator">
                <TimelineDot variant={'outlined'} className="timeline_dot"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>

        </Timeline>
    )
}

// export const CustomTimelineSeparator = () => {
//     <TimelineSeparator className="timeline_separator">
//         <TimelineDot className="timeline_dot"/>
//         <TimelineConnector />
//     </TimelineSeparator>
// }
export default MyTimeline
