import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Footer.less';

function Footer (props) {
    const { feedbacks } = props;
    return (
        <footer styleName="container">
            <div styleName="content">
            <div styleName="action-social-group">
            <button styleName="action-email">Mail</button>
            <button styleName="action-twitter">Twitter</button>
            </div>
            <p styleName="copyright">Copyright 2016 Carmi. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default CSSModules(Footer, styles);