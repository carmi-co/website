import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Hero.less';
function Hero () {
    return (
        <div styleName="container">
            <p styleName="mainText">Your next car. The journey starts here.</p>
            <p styleName="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div styleName="action-group">
            <Link styleName="actionFind" to={'/find'}>Find a car</Link>
            <Link styleName="actionKnown" to={'/known'}>I know what car</Link>
            </div>
        </div>
    );
}

export default CSSModules(Hero, styles);