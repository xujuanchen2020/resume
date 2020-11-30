import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import TabletMacOutlinedIcon from '@material-ui/icons/TabletMacOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default {
    name: "Xujuan Chen",
    title: "Full Stack Developer",
    email: 'joycuber@gmail.com',
    address: '1540 Unionport Rd, Bronx, NY',
    phone: '347-574-2258',
    socials:{
        facebook:{
            link: 'https://www.facebook.com',
            text: "Chen Chen",
            icon: <FacebookIcon/>,
        },
        twitter:{
            link: 'https://twitter.com',
            text: "Chen Chen",
            icon: <TwitterIcon/>,
        },
        linkedin:{
            link: 'https://www.linkedin.com',
            text: "Chen Chen",
            icon: <LinkedInIcon/>,
        },
        github:{
            link: 'https://github.com',
            text: "Chen Chen",
            icon: <GitHubIcon/>,
        }
    },

    about: 'Hello, my name is Xujuan Chen. I am a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React. \n\nMy dream is to one day start my own business and become an entrepreneur. I am constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS. \n\nMy latest project is a cookbook for developers. You can check it on my resume. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months. ',

    experience: [
            {
            title: "Work 1",
            date: "2010 - Present",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. "
            },

            {
            title: "Work 2",
            date: "2008 - 2010",
            description: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward. "
            },

            {
            title: "Work 3",
            date: "2005 - 2008",
            description: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. "
            },

        ],
    
    education: [
        {
        title: "Lehman College",
        date: "2019 - Present",
        description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. "
        },

        {
        title: "Bronx Community College",
        date: "2017 - 2019",
        description: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward. "
        },

        {
        title: "High School",
        date: "2016 - 2017",
        description: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. "
        }
    ],

    jobs:[
        {
            title: "Web Development",
            description: "full stack web development.",
            icon: <WebOutlinedIcon/>
        },
        {
            title: "Android Development",
            description: "full stack Android mobile development.",
            icon: <AndroidOutlinedIcon/>
        },
        {
            title: "IOS Development",
            description: "full stack IOS development.",
            icon: <TabletMacOutlinedIcon/>
        }
    ],

    skills:[
        {title: "Front-End", description: ["JavaScript", "Java", "Swift", "Python"]},
        {title: "Back-End", description: ["NodeJS", "Java", "Python"]},
        {title: "Database", description: ["Firebase", "mySQL", "littleSQL"]},
        {title: "Source Control", description: ["Git", "GitHub"]},
    ],

    projects:[
        {
            tag:"React",
            image: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            title: "React Project1",
            caption: "This is my project 1",
            description: "This is my project 1",
            links:[
                {link: 'https://youtube.com', icon:<YouTubeIcon />},
                {link: 'https://github.com', icon:<GitHubIcon />},
                {link: 'https://www.linkedin.com', icon:<LinkedInIcon />},
            ]
        },

        {
            tag:"React",
            image: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            title: "React Project1",
            caption: "This is my project 1",
            description: "This is my project 1",
            links:[
                {link: 'https://youtube.com', icon:<YouTubeIcon />},
                {link: 'https://github.com', icon:<GitHubIcon />},
                {link: 'https://www.linkedin.com', icon:<LinkedInIcon />},
            ]
        },

        {
            tag:"Android",
            image: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            title: "Android Project1",
            caption: "This is my project 1",
            description: "This is my project 1",
            links:[
                {link: 'https://youtube.com', icon:<YouTubeIcon />},
                {link: 'https://github.com', icon:<GitHubIcon />},
                {link: 'https://www.linkedin.com', icon:<LinkedInIcon />},
            ]
        },

        {
            tag:"IOS",
            image: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            title: "IOS Project1",
            caption: "This is my project 1",
            description: "This is my project 1",
            links:[
                {link: 'https://youtube.com', icon:<YouTubeIcon />},
                {link: 'https://github.com', icon:<GitHubIcon />},
                {link: 'https://www.linkedin.com', icon:<LinkedInIcon />},
            ]
        }
    ]

}