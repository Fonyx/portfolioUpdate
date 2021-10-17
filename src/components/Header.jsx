import React, { useState, useEffect } from 'react'
import M from 'materialize-css';
import {NavItem, Navbar} from 'react-materialize'
import '../App.css'


const Header = ({bgColor, textColor}) => {

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
                sidenav={
                    <ul>
                        <li className="sidenav_link"><a href="/about" className={`${textColor}`}>About</a></li>
                        <li className="sidenav_link"><a href="/experience" className={`${textColor}`}>Experience</a></li>
                        <li className="sidenav_link"><a href="/work" className={`${textColor}`}>Work</a></li>
                        <li className="sidenav_link"><a href="/contact" className={`${textColor}`}>Contact</a></li>
                        <li className="sidenav_link"><a href="/resume" className={`${textColor}`}>Resume</a></li>
                    </ul>
                }
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


