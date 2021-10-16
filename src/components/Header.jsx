import React, { Component, useState, useEffect } from 'react'
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import '../App.css'
const Header = ({bg_color, text_color}) => {

    const [bgColor, setBgColor] = useState(bg_color);
    const [textColor, setTextColor] = useState(text_color);


    return (
        <header>
        <nav>
            <div className={`nav-wrapper ${bgColor}`}>
            <img className={`navbarIcon`} src="./assets/icons/star_fox_purple.svg" alt="fonyx logo" />
            <a id="logo-container" href="#" class={`brand-logo left ${textColor}`}>FONYX PRODUCTIONS</a>
            <a href="#!" className={`brand-logo ${textColor}`}></a>
                <ul className={`right hide-on-med-and-down ${textColor}`}>
                    <li><a href="sass.html"><i className={`material-icons ${textColor}`}>search</i></a></li>
                </ul>
            </div>
        </nav> 

        <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
            <div className="background">
                <img src="images/office.jpg"/>
            </div>
            <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
            <a href="#name"><span className="white-text name">John Doe</span></a>
            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>

        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </header>
    )
    
}

export default Header


