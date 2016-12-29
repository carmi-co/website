import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './WhatIsYourPostCode.less';

function WhatIsYourPostCode () {

    return (
        <div styleName="container">
            <h1 styleName="main-title">What Is Your Post Code?</h1>
            <input type="text"/>
        </div>
    );
}

export default CSSModules(WhatIsYourPostCode, styles);
