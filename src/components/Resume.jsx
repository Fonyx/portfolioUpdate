import React from 'react'
import {Button} from 'react-materialize'
import resumeDoc from '../resume.pdf'
import '../App.css'

export default function Resume({textColor}) {
    return (
        <div className={`resume_section ${textColor}`}>
            <h2 className={`${textColor}`}>RESUME</h2>
            <a className="resume-buttons" href="https://fonyx.github.io/resume/" target="_blank" rel="noopener noreferrer">
                <Button className={`quaternary_bg quinary_text resume-button`} waves='orange'>Online
                </Button>
            </a>
            <a href={resumeDoc} download="resume.pdf" target="_blank" >
                <Button className={`quaternary_bg quinary_text resume-button`} waves='orange'>Download
                </Button>
            </a>
            <section className="row">
                <h3>Frontend Tools</h3>
                <ul className="skill-list">
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://colinstodd.com/images/posts/matcss-min.png"></img>
                    </li>
                    <li className="skill">
                        <img  className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></img>
                        </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></img>
                        </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"></img>
                    </li>
                    
                </ul>
            </section>
            <section className="row">
                <h3>Backend Tools</h3>
                <ul className="skill-list">
                    <li className="skill">
                        <img className="skill-icon-big" src="https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-05/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon-big" src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"></img>
                    </li>
                </ul>
            </section>
            <section className="row">
                <h3>Framework Tools</h3>
                <ul className="skill-list">
                    <li className="skill">
                        <img className="skill-icon-big" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png"></img>
                    </li>
                </ul>
            </section>
            <section className="row">
                <h3>Analytic Tools</h3>
                <ul className="skill-list">
                    
                    <li className="skill">
                        <img className="skill-icon" src="https://org-4f6d5299-dbf7-42d8-aa05-456b914c12f6.salsalabs.org/586c91a6-666e-40a7-a52d-84ac53ef8078/53c3aecd-2a80-4115-85fe-d56fea2a4649.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://www.bconcepts.pt/wp-content/uploads/2019/04/PowerBI-Logo.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png"></img>
                    </li>
                </ul>
            </section>
            <section className="row">
                <h3>Languages and Tools</h3>
                <ul className="skill-list">
                    <li className="skill">
                        <img className="skill-icon" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></img>
                    </li>
                    <li className="skill">
                        <img className="skill-icon" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></img>
                    </li>
                </ul>
            </section>
        </div>
    )
}
