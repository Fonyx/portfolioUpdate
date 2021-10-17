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
            <Navbar className={`${bgColor}`}
                alignLinks="right"
                id="header"
                brand={
                    <a href="#" className={`${textColor}`}>FONYX <span className="hide-on-med-and-down">PRODUCTIONS</span>
                    </a>
                }>
                
                <NavItem children={
                    <img className={`navbarIcon`} src="./assets/icons/flower_fox_orange.svg" alt="fonyx logo" />
                }/>
                <NavItem children={
                    <i className={`material-icons ${textColor}`}>search</i>
                }/>
            </Navbar>

        </header>
    )
    
}

export default Header


