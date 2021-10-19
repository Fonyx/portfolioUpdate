import React from 'react'
import 'materialize-css';
import {NavItem, Navbar} from 'react-materialize'
import '../App.css'


const Header = ({bgColor, textColor, currentPage, updatePage}) => {

    return (
        <header>
            <Navbar className="transparentBG"
                alignLinks="right"
                id="header"
                brand={<img className={`navbarIcon`} src="./assets/icons/min_fox_orange.svg" alt="fonyx logo" />}
                sidenav={
                    <ul>
                        <li className="sidenav_link"><a href="#about"       
                            onClick={() => updatePage('About')} 
                            className={currentPage==='About'? `active ${textColor}`:`inactive ${textColor}`}>About</a>
                        </li>
                        {/* <li className="sidenav_link"><a href="#experience"  
                            onClick={() => updatePage('Experience')} 
                            className={currentPage==='Experience'? `active ${textColor}`:`inactive ${textColor}`}>Experience</a>
                        </li> */}
                        <li className="sidenav_link"><a href="#portfolio"        
                            onClick={() =>  updatePage('Portfolio')} 
                            className={currentPage==='Portfolio'? `active ${textColor}`:`inactive ${textColor}`}>Portfolio</a>
                        </li>
                        <li className="sidenav_link"><a href="#contact"     
                            onClick={() =>  updatePage('Contact')} 
                            className={currentPage==='Contact'? `active ${textColor}`:`inactive ${textColor}`}>Contact</a>
                        </li>
                        <li className="sidenav_link"><a href="#resume"     
                            onClick={() =>  updatePage('Resume')} 
                            className={currentPage==='Resume'? `active ${textColor}`:`inactive ${textColor}`}>Resume</a>
                        </li>
                    </ul>
                }
                >
                <NavItem className={currentPage==='About'? `active ${textColor}`:`inactive ${textColor}`} onClick={() =>  updatePage('About')}>About</NavItem>
                {/* <NavItem className={currentPage==='Experience'? `active ${textColor}`:`inactive ${textColor}`} onClick={() =>  updatePage('Experience')}>Experience</NavItem> */}
                <NavItem className={currentPage==='Portfolio'? `active ${textColor}`:`inactive ${textColor}`} onClick={() =>  updatePage('Portfolio')}>Portfolio</NavItem>
                <NavItem className={currentPage==='Contact'? `active ${textColor}`:`inactive ${textColor}`} onClick={() =>  updatePage('Contact')}>Contact</NavItem>
                <NavItem className={currentPage==='Resume'? `active ${textColor}`:`inactive ${textColor}`} onClick={() =>  updatePage('Resume')}>Resume</NavItem>
            </Navbar>
        </header>
    )
    
}

export default Header


