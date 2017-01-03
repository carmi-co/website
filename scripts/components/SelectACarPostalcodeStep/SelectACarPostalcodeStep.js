import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './SelectACarPostalcodeStep.less';

class SelectACarPostalcodeStep extends Component {

    saveAndContinue = (e) => {
        const { saveValues, nextStep, fieldValues } = this.props;
        e.preventDefault();
        let data = {
            postcode : this.postcode.value
        }
        saveValues(data);
        nextStep();
    }

    handlePreviousStep = (e) => {
        const { previousStep } = this.props;
        e.preventDefault();
        previousStep();
    }

    render() {
        return (
            <section styleName="container">
                <p styleName="text">Time to go local</p>
                <p styleName="text">What is your postalcode</p>
                <label styleName="postcode-label">What is your postcode? </label>
                <input styleName="input" ref={(c) => { this.postcode = c; }} type="text" placeholder="Enter your postcode"/>
                <div styleName="action-group">
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </section>
        );
    }
}

export default CSSModules(SelectACarPostalcodeStep, styles);
