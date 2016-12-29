import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Wizard.less';
import ProgressBar from '../ProgressBar/ProgressBar';

class Wizard extends Component {
    constructor(props) {
        super(props);
        let step = 0;
    }

    render() {
        const { children } = this.props;
        return (
            <section styleName="container">
                <ProgressBar />
                <div>
                    {children}
                </div>
                <div styleName="action-group">
                    <button styleName="action-back" >Back</button>
                    <button styleName="action-next" >Next</button>
                </div>
            </section>
        );
    }
}

export default CSSModules(Wizard, styles);
