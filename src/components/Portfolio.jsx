import React from 'react'
import Project from './Project'

function Portfolio({bgColor, textColor}) {

    const portfolioPieceData = [
        {
          title: "Budgie",
          img:"https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/budgie",
          deploy:"https://fonyx-budgie.herokuapp.com/",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments",
          tags: "node, chartjs, materialize"
        },
        {
          title: "Tech Blog",
          img:"https://github.com/Fonyx/tech-blog/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/tech-blog",
          deploy:"https://fonyx-tech-stack.herokuapp.com/",
          description: "A blogging website for tech related discussions",
          tags: "node, sequelize, mysql, jest"
        },
        {
          title: "Actor Lookup",
          img:"https://github.com/Fonyx/actorLookup/blob/main/screencap.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/actorLookup",
          deploy:"https://fonyx.github.io/actorLookup/",
          description: "An IMDB wrapper application that allows users to search for movies shared by two actors",
          tags: "node, chartjs, materialize"
        },
        {
          title: "Weather Dashboard",
          img:"https://github.com/Fonyx/weatherDashboard/blob/main/screencap.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/weatherDashboard",
          deploy:"https://fonyx.github.io/weatherDashboard/",
          description: "An Open Weather Api wrapper application that shows current weather and forecast by city",
          tags:"node, vanillaJs, materialize"
        },
        {
          title: "Employee Tracker CMS",
          img:"https://github.com/Fonyx/employeeTracker/blob/main/assets/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/employeeTracker",
          description: "A command line application manages company department budgets and employee salaries",
          tags: "node, mysql, jest, inquirer"
        },
        {
          title: "E-commerce ORM",
          img:"https://github.com/Fonyx/eCommerceOrm/blob/main/Assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/eCommerceOrm",
          description: "An ORM for a fake E commerce company selling different categories of products",
          tags: "node, mysql, jest, sequelize"
        },
      ]
  
    var portfolioPiecesMarkup = []
      
    portfolioPieceData.forEach((portfolioPiece, index) => {

      portfolioPiecesMarkup.push(
        <Project key={index} props={portfolioPiece}/>
      )
    })

    return (
      <div className="portfolio_section">
        <h2 className={`${textColor}`}>PORTFOLIO</h2>
        <div className="row">
          {portfolioPiecesMarkup}
        </div>
      </div>
    )
}

export default Portfolio
