import React, {useState} from 'react'
import {Button} from 'react-materialize'
import '../App.css'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateNotEmpty(text){
    if(!text || text === ""){
        return false;
    }
    return true;
}


function Contact({textColor}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
    };
    
    const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // check the email is valid
    if (!validateEmail(email)) {
        setErrorMessage('Email or username is invalid');
        return;
    }
    // check the form has a name
    if (!validateNotEmpty(name)) {
        setErrorMessage('But I don\'t know who you are');
        return;
    }
    // check the form has a message
    if (!validateNotEmpty(message)) {
        setErrorMessage('I\'m going to need more information than that mate');
        return;
    }
    alert(`Thanks ${name}, I'll get back to you soon :)`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    };

    return (
        <div className={`contact_section ${textColor}`}>
            <h2 className={`${textColor}`}>CONTACT</h2>
            <h2>Come buy me a coffee and we can chat</h2>

            <a href="mailto:nick.alex.ritchie@gmail.com">
                <Button className={`quaternary_bg ${textColor}`} waves='orange'>nick.alex.ritchie@gmail.com</Button>
            </a>
            <form className="form">
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Your Name"
                />
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Let's Chat, Discuss or even...gab"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact
