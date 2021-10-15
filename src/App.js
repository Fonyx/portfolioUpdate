import React from 'react';
import './App.css';
import MaterializeNavbar from './components/Navbar';
import SvgSection from './components/SvgSection';
import Piece from './components/Piece';
import {Footer} from 'react-materialize';



function App() {
    return (
      <div className="App quaternary_bg">
        <header>
          <MaterializeNavbar 
            bg_color='primary_bg' 
            text_color='senary_text'/>
            <img 
            className="navbarIcon" 
            src="./assets/icons/flower_fox_orange.svg" 
            alt="fonyx logo"></img>
        </header>
        <main className="quaternary_bg">
          <SvgSection />
          <Piece 
            showGifUrl="https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true"title="Budgie"
            repoUrl="https://github.com/Fonyx/budgie"
            deploymentUrl="https://fonyx-budgie.herokuapp.com/" />
        </main>
        <Footer
          className="example"
          copyrights="&copy 2015 Copyright Text"
          links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
          moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
          <h5 className="white-text">
            Footer Content
          </h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </div>
    );
  }

export default App;
