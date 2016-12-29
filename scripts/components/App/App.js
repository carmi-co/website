import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './App.less';
import NavBar from '../NavBar/NavBar';

function App (props) {
    return(
        <div styleName="container">
            <NavBar />
            {props.children}
        </div>
    );
}

export default CSSModules(App, styles);
