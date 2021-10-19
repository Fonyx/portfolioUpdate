import React, {useState} from 'react'
import {Button, TextInput, Icon} from 'react-materialize'
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
    const [complete, setComplete] = useState(false);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputElement = target.id;
        const inputValue = target.value;
        
        // Based on the input type, we set the state of either email, username, and password
        if (inputElement === 'email') {
            setEmail(inputValue);
        } else if (inputElement === 'name') {
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
            setErrorMessage('That email address looks fishy');
            return;
        }
        // check the form has a name
        if (!validateNotEmpty(name)) {
            setErrorMessage('But I don\'t know who you are');
            return;
        }
        // check the form has a message
        if (!validateNotEmpty(message)) {
            setErrorMessage('But what do you want to know?');
            return;
        }
        // check the form has a message
        setComplete(true);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <div className={`contact_section center-align ${textColor}`}>
            <h2 className={`${textColor}`}>CONTACT</h2>

            <h4>Let me know what you would like to discuss</h4>

            <form className="form center-align">
                <TextInput 
                    icon={<Icon>person</Icon>}
                    id="name"
                    label="Name"
                    onChange={handleInputChange}
                />
                <TextInput
                    icon={<Icon>email</Icon>}
                    id="email"
                    label="Email"
                    type="email"
                    onChange={handleInputChange}
                    validate
                />
                <TextInput
                    icon={<Icon>message</Icon>}
                    id="message"
                    label="Let's chat, discuss or even....gab"
                    onChange={handleInputChange}
                />
                <button className="btn waves-effect waves-orange quaternary_bg quinary_text" type="button" onClick={handleFormSubmit}>Submit</button>

            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
            {complete && (
                <div>
                    <p className="complete-text">Thanks, I'll get back to you shortly</p>
                </div>
            )}

            <h4>Or if it is urgent</h4>

            <a href="mailto:nick.alex.ritchie@gmail.com">
                <Button className={`quaternary_bg quinary_text`} waves='orange'>nick.alex.ritchie@gmail.com</Button>
            </a>

        </div>
    )
}

export default Contact
