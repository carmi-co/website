import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarEmailStep.less';
import { emailValidate } from '../../utilities/emailValidate';

class FindACarPostcodeStep extends Component {

    setSelected(data) {
        return this.setState({selected: data});
    }

    saveAndContinue = (e) => {
        const { nextStep, fieldValues, storeUserEmail } = this.props;
        const { value } = this.email;
        e.preventDefault();
        if (!value || !emailValidate(value)) {
            return null;
        }
        storeUserEmail(value);
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
                <label htmlFor="email-input" styleName="main-title">What Is Your email address?</label>                
                <input styleName="input" id="email-input" ref={(c) => { this.email = c; }} type="email" placeholder="Enter your email"/>
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarPostcodeStep, styles);
