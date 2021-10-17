import React, { useState } from 'react';
import './App.css';
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Footer from './components/Footer'
import {Container} from 'react-materialize';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

    const [bgColor, setBgColor] = useState('quaternary_bg');
    const [textColor, setTextColor] = useState('quinary_text');

    return (
      <div className="App">
          <Header bg_color={bgColor} text_color={textColor}/>
          <main>
            <Container>
              <About bg_color={bgColor} text_color={textColor}></About>
              <Experience bg_color={bgColor} text_color={textColor}></Experience>
              <Work bg_color={bgColor} text_color={textColor}></Work>
              <Contact></Contact>
              <Resume></Resume>
            </Container>
            
          </main>
          <Footer bg_color="transparentBG" text_color={textColor}></Footer>
      </div>
    );
  }

export default App;
