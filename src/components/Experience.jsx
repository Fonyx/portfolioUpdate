import React from 'react'
import {Row, Col} from 'react-materialize'
import Job from './Job'
import '../App.css'


const Experience = ({bgColor, textColor}) => {

    const WorkData = [
        {
          company:"II-VI",
          title:"Calibration Process Engineer",
          description:"",
          website:"",
          product:"",
        },
    ]
  
    var workMarkup = []
      
    WorkData.forEach((Work, index) => {
        workMarkup.push(
        <Job key={index} props={Work}/>
      )
    })

    return (
      <div className="experience_section">
        <h2 className={`${textColor}`}>EXPERIENCE</h2>
        <div className="row">
          {workMarkup}
        </div>
      </div>
    )
};


export default Experience