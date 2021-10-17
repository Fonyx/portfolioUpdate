import React, { useState } from 'react';
import './App.css';
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import {Container} from 'react-materialize';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

    const [bgColor, setBgColor] = useState('quaternary_bg');
    const [textColor, setTextColor] = useState('quinary_text');

    return (
      <div className="App">
          <Header bgColor="tertiary_bg" textColor={textColor}/>
          <main>
            <Container>
              <About textColor={textColor}></About>
              <Experience textColor={textColor}></Experience>
              <Work textColor={textColor}></Work>
              <Contact textColor={textColor}></Contact>
              <Resume textColor={textColor}></Resume>
            </Container>
            
          </main>
          <Footer bgColor="transparentBG" textColor={textColor}></Footer>
      </div>
    );
  }

export default App;
