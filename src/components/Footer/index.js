import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="buttons">
                    <div className="button">
                        <a href="https://github.com/bennygo3" rel="noreferrer" target="_blank">
                            {/* <i className="github"></i> */}
                            <p>Github</p>
                        </a>
                    </div>
                    <div className="button">
                        <a href="https://www.linkedin.com/in/benjamin-a-gomez" rel="noreferrer" target="_blank">
                            {/* <i className="linkedin"></i> */}
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    <div className="button">
                        <a href="mailto:gobecodeme@gmail.com" rel="noreferrer" target="_blank">
                            {/* <i className="email"></i> */}
                            <p>Email</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;