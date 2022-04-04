import React from 'react';
import './Home.css'
import Longhorn from '../../assets/longhornCleaned.png';


const Home = () => {
    return (
        <div>
            <div id="longhornContainer">
                <img src={Longhorn} alt="younger me" className="longhorn" />
            </div>
        </div>

    )
}

export default Home;