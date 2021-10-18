import React from 'react'
import {Row, Col} from 'react-materialize'
import '../App.css'


const Experience = ({textColor}) => {

    return (
        <div className="experience_section">
            <h2 className={`${textColor}`}>EXPERIENCE</h2>
            <Row className={`${textColor}`}>
                <Col>
                    <h2>Companies</h2>
                </Col>
                <Col>
                    <h2>Roles</h2>
                </Col>
            </Row>
        </div>
    )
};


export default Experience