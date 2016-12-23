import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './App.less';


function App (props) {
    return(
        <div styleName="container">
            <nav role="nav" styleName="navbar">
                <Link to={'/'} styleName="action-home">carmi</Link>
                <p styleName="phone-number">0203 856 8523</p>
            </nav>
            {props.children}
        </div>
    );
}

export default CSSModules(App, styles);
