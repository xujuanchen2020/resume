import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Browser as Link, NavLink, withRouter} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import reuseData from '../../utils/reuseData';
import MyButton from '../Button/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import './HeaderStyle.css';

const Header = (props) => {
    const pathName = props?.location?.pathname;

    return ( /* https://react-bootstrap.netlify.app/components/navbar/#navbars */
        <Navbar expand="lg" sticky='top' className='header'>
            <Nav.Link as ={NavLink} to='/' className={'header_navLink'}>
                <Navbar.Brand className='header_home'>
                    <HomeIcon/>
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle/>

            <Navbar.Collapse>
                <Nav className="header-left">
                    <Nav.Link as={NavLink} to='/' 
                    className={pathName==='/'?"header_link_active":"header_link"}>About me</Nav.Link>
                    <Nav.Link as={NavLink} to='/resume' 
                    className={pathName==='/resume'?"header_link_active":"header_link"}>Resume</Nav.Link>
                    <Nav.Link as={NavLink} to='/portfolio' 
                    className={pathName==='/portfolio'?"header_link_active":"header_link"}>Portfolio</Nav.Link>
                    <Nav.Link as={NavLink} to='/contact' 
                    className={pathName==='/contact'?"header_link_active":"header_link"}>Contact</Nav.Link>
                </Nav>
                <div className='header_right'>
                    {Object.keys(reuseData.socials).map(key=>
                    (<a href= {reuseData.socials[key].link} target='_blank'>
                        {reuseData.socials[key].icon}
                    </a>))}
                    <MyButton text={"contact me"} icon={<TelegramIcon/>} />
                </div>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default withRouter(Header);
