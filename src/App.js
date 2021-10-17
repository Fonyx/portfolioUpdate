import React, { useState } from 'react';
import './App.css';
// tslint:disable-next-line
import 'materialize-css/dist/css/materialize.min.css';
import {Container} from 'react-materialize';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

    const textColor = 'quinary_text'

    const [currentPage, setCurrentPage] = useState('About');

    // conditionally update state
    const renderPage = () => {
      console.log(`Rendering page: ${currentPage}`)
      if (currentPage === 'About') {
        return <About textColor={textColor}/>;
      }
      if (currentPage === 'Experience') {
        return <Experience textColor={textColor}/>;
      }
      if (currentPage === 'Work') {
        return <Work textColor={textColor}/>;
      }
      if (currentPage === 'Contact') {
        return <Contact textColor={textColor}/>;
      }
      return <Resume textColor={textColor}/>;
    };

    const updatePage = (page) => {
      setCurrentPage(page)
    }

    return (
      <div className="App">
          <Header 
            bgColor="tertiary_bg" 
            textColor={textColor} 
            currentPage={currentPage}
            updatePage={updatePage}
          />
          <main>
            <Container>
              {renderPage()}
              {/* <About textColor={textColor}></About>
              <Experience textColor={textColor}></Experience>
              <Work textColor={textColor}></Work>
              <Contact textColor={textColor}></Contact>
              <Resume textColor={textColor}></Resume> */}
            </Container>
          </main>
          <Footer bgColor="transparentBG" textColor={textColor}></Footer>
      </div>
    );
  }

export default App;
