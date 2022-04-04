import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <div className="buttons">
                <div className="button">
                    <a href="https://github.com/bennygo3" rel="noreferrer" target="_blank">
                        <i className='fa fa-github red-color'></i>
                        {/* <p>Github</p> */}
                    </a>
                </div>
                <div className="button">
                    <a href="https://www.linkedin.com/in/benjamin-a-gomez" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i>
                        {/* <p>LinkedIn</p> */}
                    </a>
                </div>
                <div className="button">
                    <a href="mailto:gobecodeme@gmail.com" rel="noreferrer" target="_blank">
                    <i className="fa-regular fa-envelope"></i>
                        {/* <p>Email</p> */}
                    </a>
                </div>
            </div>

        );
    }
}

export default Footer;