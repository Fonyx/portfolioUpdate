import React, { useState, useEffect } from 'react'
import M from 'materialize-css';
import {NavItem, Navbar} from 'react-materialize'
import '../App.css'


const Header = ({bg_color, text_color}) => {

    const [bgColor, setBgColor] = useState(bg_color);
    const [textColor, setTextColor] = useState(text_color);

    // initialize materialize sidenav on attach
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var options = {};
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
          });
    }, [])

    return (
        <header>
            <Navbar className="transparentBG"
                alignLinks="right"
                id="header"
                brand={<img className={`navbarIcon`} src="./assets/icons/flower_fox_orange.svg" alt="fonyx logo" />}
                >
                <NavItem className={`${textColor}`}>About</NavItem>
                <NavItem className={`${textColor}`}>Experience</NavItem>
                <NavItem className={`${textColor}`}>Work</NavItem>
                <NavItem className={`${textColor}`}>Contact</NavItem>
                <NavItem className={`${textColor}`}>Resume</NavItem>
            </Navbar>
        </header>
    )
    
}

export default Header


