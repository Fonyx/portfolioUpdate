import React from 'react'
import M from 'materialize-css';
import {Row, Col, Button} from 'react-materialize'
import '../App.css'

function Contact() {
    return (
        <div>
           <h2>Come buy me a coffee and we can chat</h2>

           <a href="mailto:nick.alex.ritchie@gmail.com">
               <Button className='secondary_bg' waves='purple'>nick.alex.ritchie@gmail.com</Button>
           </a>
        </div>
    )
}

export default Contact
