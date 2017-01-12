import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './SelectACarNameStep.less';
import { emailValidate } from '../../utilities/emailValidate';

class SelectACarNameStep extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();        
        const { saveValues, nextStep, fieldValues } = this.props;
        if (!this.email.value || !emailValidate(this.email.value) || !this.username.value) {
            return null;
        }
        let data = {
            postcode : this.username.value,
            postcode : this.email.value
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
                <p styleName="text">We also want to know who you are</p>
                <label htmlFor="username-input" styleName="main-title">Name</label>
                <input id="username-input" styleName="input" ref={(c) => { this.username = c; }} type="text" placeholder="Enter your name"/>
                <label htmlFor="email-input" styleName="main-title">E-mail address</label>                
                <input styleName="input" id="email-input" ref={(c) => { this.email = c; }} type="email" placeholder="Enter your email"/>
                <div styleName="action-group">
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </section>
        );
    }
}

export default CSSModules(SelectACarNameStep, styles);
