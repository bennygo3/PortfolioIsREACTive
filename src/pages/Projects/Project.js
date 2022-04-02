import React from 'react';
// import { Link } from 'react-router-dom';
import Spray from '../../assets/Spray.png';
import Color from '../../assets/colorTransform.jpeg';
import Dali from '../../assets/salEar.jpg';
import Red from '../../assets/redfaced.jpeg';
import Warhol from '../../assets/warhol.jpeg';
import Licht from '../../assets/Licht.jpeg';
import Sunburst from '../../assets/sunburst.jpeg';
import CloseUp from '../../assets/closeUp.jpeg';
import Paintbrushes from '../../assets/paintbrushes.jpeg';
import './Project.css';

const Project = () => {
    return (
        <div>
            {/* <img src={Spray} alt="hand spray painting" className="spray1" /> */}
            <img src={Spray} alt="hand spray painting" className="spray" />
            <div id="sprayContainer">
                {/* <img src={Spray} alt="hand spray painting" className="spray" /> */}

                <a className="container1" href="https://ribbonanarchy.github.io/PokemonVsNature/" rel="noreferrer" target={"_blank"}>
                    <img src={Licht} alt="Lichtenstein painting" />


                    <div className="content1">
                        <p>PokéWeather</p>
                    </div>
                </a>

                <a className="container2" href="https://decked--out.herokuapp.com/" rel="noreferrer" target={"_blank"}>
                    <img src={Dali} alt="Salvador Dali placeholder." />

                    <div className="content2">
                        <p>Decked-Out</p>
                    </div>

                </a>

                <a className="container3" href="https://bennygo3.github.io/WhereToWeather/" rel="noreferrer" target={"_blank"}>
                    <img src={Red} alt="Painting of a man." />

                    <div className="content3">
                        <p>Where To Weather</p>
                    </div>

                </a>



                <a className="container4" href="https://github.com/bennygo3/SQLisDataBased" rel="noreferrer" target={"_blank"}>
                    <img src={Warhol} alt="Warhol painting" />

                    <div className="content4">
                        <p>SQLisDataBased</p>
                    </div>

                </a>




                <a className="container5" href="https://github.com/bennygo3/Object-Oriented-Profile" rel="noreferrer" target={"_blank"}>
                    <img src={Color} alt="Colorful" />

                    <div className="content5">
                        <p>O-O-P</p>
                    </div>

                </a>

                <a className="container6" href="https://github.com/bennygo3/ORMeCommerce" rel="noreferrer" target={"_blank"}>
                    <img src={Sunburst} alt="Painting of the sun" />

                    <div className="content6">
                        <p>ORMeCommerce</p>
                    </div>

                </a>

                <a className="container7" href="https://github.com/bennygo3/README-generated" rel="noreferrer" target={"_blank"}>
                    <img src={CloseUp} alt="Zoomed in pic of a painting" />

                    <div className="content7">
                        <p>README-generated</p>
                    </div>

                </a>

                <a className="container8" href="https://bennygo3.github.io/HardCoded/" rel="noreferrer" target={"_blank"}>
                    <img src={Paintbrushes} alt="Paintbrushes" />

                    <div className="content8">
                        <p>HardCoded</p>
                    </div>

                </a>










            </div>
            {/* <img src={Spray} alt="hand spray painting" className="spray" /> */}
        </div>
    )
}

export default Project