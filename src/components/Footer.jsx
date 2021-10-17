import React from 'react'

const Footer = ({bg_color, text_color}) => {
    return (
        <footer className="transparentBG">
            <div>
                <div className="row">
                <div className="col l6 s12">
                    <h5 className={`${bg_color} ${text_color}`}>Footer Content</h5>
                    <p className={`${bg_color} ${text_color} text-lighten-4`}>You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className={`${text_color}`}>Links</h5>
                    <ul>
                    <li><a className={`${text_color} text-lighten-1`} href="#!">Link 1</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


