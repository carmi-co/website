import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HowItWorks.less';
import { Element } from 'react-scroll';

function HowItWorks () {
    return (
        <section>
            <Element styleName="container" name="how-it-works">
                <h1 styleName="main-title">How <span styleName="text-color-branded">Carmi</span> works</h1>
                <p styleName="text">Find the right car, share it and earn money from it when you don't need it. It that easy and that much smarter.</p>
                <div styleName="list-steps">
                    <section styleName="column-car">
                        <h1 styleName="column-title">Find the car you want or let us find it for you</h1>
                        <p styleName="column-text">We negotiate the price for you and you get the car on our exclusive lease. The car itself comes from our partners in the biggest dealerships around the country, which means you have the same warranties and service as you would otherwise.</p>
                    </section>
                    <section styleName="column-hands">
                        <h1 styleName="column-title"> Carmi contract means sharing and flexibility</h1>
                        <p styleName="column-text"> You get your car on a monthly subscription that allows you to share you car. This is exclusive to Carmi and means that you can make money from your car when you're not using your car. Also it means that you can get a new car when your contract is over.</p>
                    </section>
                    <section styleName="column-share">
                        <h1 styleName="column-title">Share by confidence and earn by sharing</h1>
                        <p styleName="column-text">We set you up on platforms that allow you to share your car. All drivers are vetted and both you, your car and the driver are fully insured. By renting out 3 days a month you can save up to 75% on your monthly contract.</p>
                    </section>
                </div>
            </Element>
        </section>
    );
}

export default CSSModules(HowItWorks, styles);