import React from 'react'
import Project from './Project'

function Portfolio() {

    let bgColor="secondary_bg";
    let textColor="quinary_text";

    const portfolioPieceData = [
        {
          title: "Budgie",
          img:"https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/budgie",
          deploy:"https://fonyx-budgie.herokuapp.com/",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments"
        },
        {
          title: "Tech Blog",
          img:"https://github.com/Fonyx/tech-blog/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/tech-blog",
          deploy:"https://fonyx-tech-stack.herokuapp.com/",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments"
        },
        {
          title: "Actor Lookup",
          img:"https://github.com/Fonyx/actorLookup/blob/main/screencap.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/actorLookup",
          deploy:"https://fonyx.github.io/actorLookup/",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments"
        },
        {
          title: "Weather Dashboard",
          img:"https://github.com/Fonyx/weatherDashboard/blob/main/screencap.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/weatherDashboard",
          deploy:"https://fonyx.github.io/weatherDashboard/",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments"
        },
        {
          title: "Team Page Generator",
          img:"https://github.com/Fonyx/teamGenerator/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/teamGenerator",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments"
        },
        {
          title: "E-commerce ORM",
          img:"https://github.com/Fonyx/eCommerceOrm/blob/main/Assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/actorLookup",
          deploy:"https://fonyx.github.io/actorLookup/",
          description: "A budgeting app built allowing users to make multiple accounts and track their recurring payments"
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
