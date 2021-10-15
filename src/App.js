import React from 'react';
import './App.css';
import Header from './components/Header';
import SvgSection from './components/SvgSection';
import Piece from './components/Piece';
import CustomFooter from './components/CustomFooter';
import { Row, Container } from 'react-materialize';



function App() {
    return (
      <div className="App">
        <Header bg_color="bg_primary" text_color="text_senary"/>
        <main className="quaternary_bg">

              <SvgSection />
              <Piece 
                showGifUrl="https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true"title="Budgie"
                repoUrl="https://github.com/Fonyx/budgie"
                deploymentUrl="https://fonyx-budgie.herokuapp.com/" />

        </main>
        <CustomFooter className="footer"/>
      </div>
    );
  }

export default App;
