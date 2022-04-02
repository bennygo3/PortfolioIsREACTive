import React from 'react';
import './Home.css'
import Longhorn from '../../assets/longhornSkull.png';


const Home = () => {
    return (
        <div>
            <div id="longhornContainer">
                <img src={Longhorn} alt="longhorn skull" className="longhorn" />
            </div>
        </div>

    )
}

export default Home;