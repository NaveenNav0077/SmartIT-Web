import React from 'react';
import './about.scss';
import { Link } from 'react-scroll';

function About() {
    return (
        <div id="about" className="about">
            <div className="about__text">
                <h1  className="about__text__h1">Make Your Home Samater</h1>
                <p  className="about__text__p">Live In The Future</p>
                <div className="about__text__btn"><Link to="products" smooth={true}>EXPLORE MORE</Link></div>
            </div>
        </div>
    )
}

export default About
