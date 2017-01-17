import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarMobileNumberStep.less';
import phoneValidate from 'phone';

class FindACarMobileNumberStep extends Component {
    validatePhone(userNumber) {
        return phoneValidate(userNumber, 'GBR').length;
    }

    saveAndContinue = (e) => {
        e.preventDefault();        
        const { nextStep, fieldValues, storeUserMobile } = this.props;
        if (!this.mobileNumber.value || !this.validatePhone(this.mobileNumber.value)) {
            return null;
        }
        storeUserMobile(this.mobileNumber.value);
        return nextStep();
    }
    
    handlePreviousStep = (e) => {
        const { previousStep } = this.props;
        e.preventDefault();
        previousStep();
    }

    render() {
        return (
            <div styleName="container">
                <label styleName="main-title">What is your mobile number?</label>
                <input styleName="input" ref={(c) => { this.mobileNumber = c; }} type="text" placeholder="Enter your mobile number"/>
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarMobileNumberStep, styles);
