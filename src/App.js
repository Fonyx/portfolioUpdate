import React from 'react';
import './App.css';
//eslint-disable-next-line
import Materialize from 'materialize-css/dist/css/materialize.min.css';


function App() {
    return (
      <div className="App">
          <header>
            <nav>
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                    <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                    <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                </ul>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                <div className="background">
                    <img src="images/office.jpg"/>
                </div>
                <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <img 
            className="navbarIcon" 
            src="./assets/icons/flower_fox_orange.svg" 
            alt="fonyx logo">
            </img>
          </header>
          <main>
            <div className='row'>
              <div className='col m6'>
                <div class="col s12 m7">
                  <h2 class="header">Budgie</h2>
                  <div class="card horizontal">
                    <div class="card-image">
                      <img src="https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true" />
                    </div>
                    <div class="card-stacked">
                      <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                      </div>
                      <div class="card-action">
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
