import React, { useState } from 'react';
import './App.css';
// tslint:disable-next-line
import 'materialize-css/dist/css/materialize.min.css';
import {Container} from 'react-materialize';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Resume from './components/Resume';
import Particles from 'react-particles-js';

function App() {

    const textColor = 'senary_text'
    const bgColor = 'quinary_bg'

    const [currentPage, setCurrentPage] = useState('Portfolio');

    // conditionally update state
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About textColor={textColor}/>;
      }
      if (currentPage === 'Experience') {
        return <Experience textColor={textColor}/>;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio textColor={bgColor, textColor}/>;
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
              <Particles
                params={{
                  "particles": {
                    "number": {
                      "value": 150,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ae4d75"
                    },
                    "shape": {
                      "type": "polygon",
                      "stroke": {
                        "width": 0,
                        "color": "#ae4d75"
                      },
                      "polygon": {
                        "nb_sides": 6
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 0.07991497047141839,
                        "opacity_min": 0.19978742617854597,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 13,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 23.974491141425517,
                        "size_min": 3.99574852357092,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 142.0488174435947,
                      "color": "#ae4d75",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "window",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 266.04729729729706,
                        "size": 12.668918918918909,
                        "duration": 0.9290540540540533,
                        "opacity": 0.6249999999999996,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }}/>
            <Container>
                {renderPage()}
            </Container>
          </main>
          <Footer bgColor="transparentBG" textColor={textColor}></Footer>
      </div>
    );
  }

export default App;
