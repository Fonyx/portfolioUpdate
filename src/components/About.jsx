import React from 'react'
import {Row} from 'react-materialize'
import '../App.css'


const About = ({textColor}) => {

    return (
        <div className="about_section">
            <h2 className={`${textColor}`}>ABOUT</h2>
            <Row>
                <img className="displayPicture" src="./assets/images/circle-dp.png" alt="nicks profile"></img>
                <p className={`${textColor}`}>Hi, my name is</p>
                <h2 className={`${textColor}`}>Nicholas Ritchie</h2>
                <h3 className={`${textColor}`}>And I build things....internet things</h3>
                <p className={`${textColor}`}>I'm a full stack developer completing my bootcamp with USYD and trilogy. In the near future I am looking to get into fin tech development and I have a background in data-science and manufacturing.</p>
                <p className={`${textColor}`}>Full stack developer with a background in engineering. Certificate in full stack development from the University of Sydney, with skills in nodeJs, react, css frame works and data persistence tools. An enterprising professional with diverse professional history and a warm interpersonal tone. Made the change from engineering to pursue an idea of visualizing career pathways as an interactive map. Built using Django, d3 and BeautifulSoup. From this project I discovered a dormant attraction to compelling visual products and software development. With a hard science background and broad experience in hardware, I will join you with a light-hearted charm and comprehensive understanding of technical group work.</p>
            </Row>
        </div>
        
    )
};


export default About