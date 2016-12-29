import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './ProgressBar.less';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filled } = this.props;
        return (
            <section styleName="container">
                <div styleName="filled"></div>
            </section>
        );
    }
}

export default CSSModules(ProgressBar, styles);
