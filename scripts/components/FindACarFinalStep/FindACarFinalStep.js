import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarFinalStep.less';

class FindACarFinalStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div styleName="container">
                <h1 styleName="main-title">Thank you!</h1>
                <p styleName="text">We will now collect offers from dealerships around the country and get in touch with the best</p>
                <p styleName="text">In the meantime feel free to get in touch on</p>
                <p styleName="text">0203 856 8523</p>
                <p styleName="text">hello@carmi.co</p>
            </div>
        );
    }
}

export default CSSModules(FindACarFinalStep, styles);
