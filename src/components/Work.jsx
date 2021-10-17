import React from 'react'
import WorkPiece from './WorkPiece'

function Work() {

    let bgColor="secondary_bg";
    let textColor="quinary_text";

    const workPieceData = [
        {
          title: "Budgie",
          img:"https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
          repo:"https://github.com/Fonyx/budgie",
          deploy:"https://fonyx-budgie.herokuapp.com/"
        },
        {
          title: "Budgie",
          img:"https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
        },
        {
          title: "Budgie",
          img:"https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true",
          bg_color:bgColor,
          text_color:textColor,
        },
      ]
  
      var workPiecesMarkup = []
      
      workPieceData.forEach((workPiece, index) => {
  
        workPiecesMarkup.push(
          <WorkPiece key={index} props={workPiece}/>
        )
      })

    return (
        <div>
            {workPiecesMarkup}
        </div>
    )
}

export default Work
