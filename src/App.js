import React, { useState } from 'react';
import './App.css';
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header.jsx'

function App() {

    const [bgColor, setBgColor] = useState('primary_bg');
    const [textColor, setTextColor] = useState('senary_text');

    return (
      <div className="App">
          <Header bg_color={bgColor} text_color={textColor}/>
          <main>
            <div className='row'>
              <div className='col m6'>
                <div className="col s12 m7">
                  <h2 className="header">Budgie</h2>
                  <div className="card horizontal">
                    <div className="card-image">
                      <img src="https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true" />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                      </div>
                      <div className="card-action">
                        <a href="https://github.com/Fonyx/budgie">Repo</a>
                        <a href="https://fonyx-budgie.herokuapp.com/">Deployed</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
