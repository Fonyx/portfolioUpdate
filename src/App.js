import React from 'react';
import './App.css';
import Header from './components/Header';
import SvgSection from './components/SvgSection';
import WorkCard from './components/Piece';
import CustomFooter from './components/CustomFooter';
import { Row, Col, Container } from 'react-materialize';



function App() {
    return (
      <React.Fragment>
        <Header bg_color="primary_bg" text_color="senary_text"></Header>
        <SvgSection></SvgSection>
        <Row>
          <Col m={6}>
            <WorkCard 
            showGifUrl="https://github.com/Fonyx/budgie/blob/main/assets/images/show.gif?raw=true"
            title="Budgie"
            repoUrl="https://github.com/Fonyx/budgie"
            deploymentUrl="https://fonyx-budgie.herokuapp.com//"
            />
          </Col>
        </Row>
        <CustomFooter className="footer" />
      </React.Fragment>
    );
  }

export default App;
