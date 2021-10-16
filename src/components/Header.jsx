import React, { useState, useEffect } from 'react'
import M from 'materialize-css';
import {NavbarIcon, Icon, Button, SideNavItem, SideNav} from 'react-materialize'
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
            <nav>
                <div className={`nav-wrapper ${bgColor}`}>
                    <img className={`navbarIcon`} src="./assets/icons/star_fox_purple.svg" alt="fonyx logo" />
                    <a id="logo-container" href="#" class={`brand-logo ${textColor}`}>FONYX <span className="hide-on-med-and-down">PRODUCTIONS</span></a>
                    <a href="#!" className={`brand-logo ${textColor}`}></a>
                    <ul className={`right hide-on-med-and-down ${textColor}`}>
                        <li><a href="sass.html"><i className={`material-icons ${textColor}`}>search</i></a></li>
                    </ul>
                </div>
            </nav> 

            <SideNav
                id="SideNav-34"
                options={{
                draggable: true
                }}
                trigger={<Button node="button">SIDE NAV DEMO</Button>}
            >
                <SideNavItem
                user={{
                    background: 'https://placeimg.com/640/480/tech',
                    email: 'jdandturk@gmail.com',
                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                    name: 'John Doe'
                }}
                userView
                />
                <SideNavItem
                href="#!icon"
                icon={<Icon>cloud</Icon>}
                >
                First Link With Icon
                </SideNavItem>
                <SideNavItem href="#!second">
                Second Link
                </SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>
                Subheader
                </SideNavItem>
                <SideNavItem
                href="#!third"
                waves
                >
                Third Link With Waves
                </SideNavItem>
            </SideNav>

        </header>
    )
    
}

export default Header


