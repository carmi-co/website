import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarPostcodeStep.less';
import { validatePostcode } from '../../utilities/postcodeValidate';

class FindACarPostcodeStep extends Component {

    saveAndContinue = (e) => {
        const { nextStep, fieldValues, storeUserPostcode } = this.props;
        e.preventDefault();
        if (!this.postcode.value || !validatePostcode(this.postcode.value)) {
            return null;
        } 
        storeUserPostcode(this.postcode.value);
        nextStep();
    }

    handlePreviousStep = (e) => {
        const { previousStep } = this.props;
        e.preventDefault();
        previousStep();
    }

    render() {
        return (
            <div styleName="container">
                <label styleName="main-title">What is your postcode? </label>
                <input styleName="input" ref={(c) => { this.postcode = c; }} type="text" placeholder="Enter your postcode"/>
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarPostcodeStep, styles);
