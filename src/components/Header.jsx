import React, { useState, useEffect } from 'react'
import M from 'materialize-css';
import {NavItem, Navbar} from 'react-materialize'
import '../App.css'


const Header = ({bgColor, textColor, currentPage, updatePage}) => {

    return (
        <header>
            <Navbar className="transparentBG"
                alignLinks="right"
                id="header"
                brand={<img className={`navbarIcon`} src="./assets/icons/flower_fox_orange.svg" alt="fonyx logo" />}
                sidenav={
                    <ul>
                        <li className="sidenav_link"><a href="#about"       
                            onClick={() => updatePage('About')} 
                            className={currentPage==='About'? 'active':'inactive '+`${textColor}`}>About</a>
                        </li>
                        <li className="sidenav_link"><a href="#experience"  
                            onClick={() => updatePage('Experience')} 
                            className={currentPage==='Experience'? 'active':'inactive '+`${textColor}`}>Experience</a>
                        </li>
                        <li className="sidenav_link"><a href="#work"        
                            onClick={() =>  updatePage('Work')} 
                            className={currentPage==='Work'? 'active':'inactive '+`${textColor}`}>Work</a>
                        </li>
                        <li className="sidenav_link"><a href="#contact"     
                            onClick={() =>  updatePage('Contact')} 
                            className={currentPage==='Contact'? 'active':'inactive '+`${textColor}`}>Contact</a>
                        </li>
                        <li className="sidenav_link"><a href="#resume"     
                            onClick={() =>  updatePage('Resume')} 
                            className={currentPage==='Resume'? 'active':'inactive '+`${textColor}`}>Resume</a>
                        </li>
                    </ul>
                }
                >
                <NavItem className={currentPage==='About'? 'active':'inactive '+`${textColor}`} onClick={() =>  updatePage('About')}>About</NavItem>
                <NavItem className={currentPage==='Experience'? 'active':'inactive '+`${textColor}`} onClick={() =>  updatePage('Experience')}>Experience</NavItem>
                <NavItem className={currentPage==='Work'? 'active':'inactive '+`${textColor}`} onClick={() =>  updatePage('Work')}>Work</NavItem>
                <NavItem className={currentPage==='Contact'? 'active':'inactive '+`${textColor}`} onClick={() =>  updatePage('Contact')}>Contact</NavItem>
                <NavItem className={currentPage==='Resume'? 'active':'inactive '+`${textColor}`} onClick={() =>  updatePage('Resume')}>Resume</NavItem>
            </Navbar>
        </header>
    )
    
}

export default Header


