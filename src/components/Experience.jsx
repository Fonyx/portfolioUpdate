import React from 'react'
import {Row, Col} from 'react-materialize'
import '../App.css'


const Experience = ({textColor}) => {

    return (
        <Row className={`${textColor}`}>
            <Col>
                <h2>Companies</h2>
            </Col>
            <Col>
                <h2>Roles</h2>
            </Col>
        </Row>
    )
};


export default Experience