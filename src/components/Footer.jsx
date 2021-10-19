import React from 'react'

const Footer = ({bgColor, textColor}) => {
    return (
        <footer className="transparentBG">
            <div>
                <div className="col l4 offset-l2 s12">
                    <div className="footer-icons">
                        <a className={`footer-icon ${textColor}`} target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/1660198/user1660198">
                            <i id="profile-stackoverflow-icon" className="fab fa-3x fa-stack-overflow">
                            </i>
                        </a>
                        <a className={`footer-icon ${textColor}`} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicholas-ritchie-55147878/">
                            <i id="profile-linkedIn-icon" className="fab fa-3x fa-linkedin">
                            </i>
                        </a>
                        <a className={`footer-icon ${textColor}`} target="_blank" rel="noopener noreferrer" href="https://github.com/Fonyx">
                            <i id="profile-github-icon" className="fab fa-3x fa-github">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


