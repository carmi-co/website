import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarUsernameStep.less';

class FindACarUsernameStep extends Component {

    setSelected(data) {
        return this.setState({selected: data});
    }

    saveAndContinue = (e) => {
        const { saveValues, nextStep, fieldValues } = this.props;
 
        e.preventDefault();
        let data = {
            email : this.username.value
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
            <div styleName="container">
                <label styleName="main-title">What is your name?</label>
                <input styleName="input" ref={(c) => { this.username = c; }} type="text" placeholder="Enter your name"/>
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarUsernameStep, styles);
