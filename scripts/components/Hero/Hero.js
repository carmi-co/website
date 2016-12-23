import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Hero.less';
import { Link as ScrollLink } from 'react-scroll';

function Hero () {
    return (
        <div styleName="container">
            <p styleName="main-text">Flexibility of a car when you need it and income when you don't</p>
            <p styleName="text">Get a car on a monthly subscription and earn by sharing it when you don't need it</p>
            <div styleName="action-group">
                <Link styleName="action-find" to={'/find'}>Find a car</Link>
                <Link styleName="action-known" to={'/known'}>I know what car</Link>
            </div>
            <ScrollLink to="how-much" smooth={true} offset={50} duration={500} styleName="action-how-much">How much can I earn?</ScrollLink>
            <ScrollLink to="how-it-works" smooth={true} offset={50} duration={500} styleName="action-how-it-work">How it works?</ScrollLink>
        </div>
    );
}

export default CSSModules(Hero, styles);