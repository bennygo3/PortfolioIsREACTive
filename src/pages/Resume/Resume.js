import React from 'react';
import './Resume.css';
import Robot from '../../assets/RobotVision.png';
import BenResume from './BenjaminGomezResume.pdf'



const Resume = () => {
    return (
        <div>
            <div id="mainContainer">
                <div className="resumeContainer">
                    <a href={BenResume} target="_blank" rel="noreferrer">Resume
                    {/* <p >(Click!)</p> */}
                    </a>
                </div>

                <div id="robotContainer">
                    <img src={Robot} alt="robot" className="robot" />
                </div>
            </div>

        </div>

    )
}

export default Resume;

// "BenjaminGomezResume.pdf"