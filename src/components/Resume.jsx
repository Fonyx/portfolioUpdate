import React from 'react'
import M from 'materialize-css';
import {Row, Col, Button} from 'react-materialize'
import '../App.css'

export default function Resume() {
    return (
        <div>
            <a href="https://fonyx.github.io/resume/" target="_blank">
                <Button className="secondary_bg" waves='purple'>Resume
                </Button>
            </a>
            <h3>Skills</h3>
            <ul>
                <li>React</li>
                <li>Materialize CSS</li>
                <li>Git</li>
            </ul>
        </div>
    )
}
