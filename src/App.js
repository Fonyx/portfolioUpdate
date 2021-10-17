import React, { useState } from 'react';
import './App.css';
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header.jsx'
import WorkPiece from './components/WorkPiece'
import {Row, Col, Container} from 'react-materialize';

function App() {

    const [bgColor, setBgColor] = useState('primary_bg');
    const [textColor, setTextColor] = useState('senary_text');

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

    console.log(workPiecesMarkup);

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
          <footer className="footer">
            <div>
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Footer Content</h5>
                  <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
      </div>
    );
  }

export default App;
