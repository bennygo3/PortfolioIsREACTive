import React from 'react';
import './HeaderNav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    
    render() {
        return (
            <div className='background'>
                <h1 className='name'>Benjamin A. Gomez</h1>
                <div className='links'>
                    <div id='about' onClick = {()=>console.log("clicked1")}>
                        <Link to="/aboutme">About me</Link>
                    </div>
                    <div id='portfolio' onClick = {()=>console.log("clicked2")}>
                        <Link to="/portfolio">Portfolio</Link>
                    </div>
                    <div id='resume' onClick = {()=>console.log("clicked3")}>
                        <Link to="/resume">Resume</Link>
                    </div>
                    <div id='contact' onClick = {()=>console.log("clicked4")}>
                        <Link to="/contact">Contact</Link>
                    </div>

                </div>
            </div>
        );
    }
}


export default Nav;