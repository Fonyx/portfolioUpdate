import React, { useState } from 'react';
import './App.css';
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header.jsx'
import WorkPiece from './components/WorkPiece'
import Footer from './components/Footer'
import {Row, Col, Container} from 'react-materialize';

function App() {

    const [bgColor, setBgColor] = useState('quaternary_bg');
    const [textColor, setTextColor] = useState('quinary_text');

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
      <div className="App">
          <Header bg_color={bgColor} text_color={textColor}/>
          <main>
            <Container>
              <Row>
                {workPiecesMarkup}
              </Row>
            </Container>
          </main>
          <Footer bg_color="transparentBG" text_color={textColor}></Footer>
      </div>
    );
  }

export default App;
