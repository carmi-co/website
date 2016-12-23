import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HowItWorks.less';
import car from "./icon-car.png";
import hands from "./icon-hands.png";
import share from "./icon-share.png";
import { Element } from 'react-scroll';

function HowItWorks () {
    return (
        <Element styleName="container" name="how-it-works">
            <h1 styleName="main-title">How <span styleName="text-color-branded">Carmi</span> works</h1>
            <p styleName="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div styleName="list-steps">
                <section styleName="column-car">
                    <h1 styleName="column-title">BUILD YOUR DREAM CAR</h1>
                    <p styleName="column-text">Tailor your monthly contract based on your budget. Plus, we give you a way to earn money back after you buy to offset the cost.</p>
                </section>
                <section styleName="column-hands">
                    <h1 styleName="column-title"> SHARE &amp; EARN WITH CONFIDENCE</h1>
                    <p styleName="column-text">Carmi gives you the ability to earn money by sharing your car when you don't need it, and only if you want to. You're fully insured and will only be sharing with fully certified and trusted drivers.</p>
                </section>
                <section styleName="column-share">
                    <h1 styleName="column-title">SPREAD THE MONETARY LOVE!</h1>
                    <p styleName="column-text">Sharing with Carmi can give you a little extra cash to play with every month. Happy drivers, happy Carmi.</p>
                </section>
            </div>
        </Element>
    );
}

export default CSSModules(HowItWorks, styles);