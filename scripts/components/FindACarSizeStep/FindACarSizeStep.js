import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarSizeStep.less';



class FindACarSizeStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    setSelected(data) {
        return this.setState({selected: data});
    }

    saveAndContinue = (e) => {
        const { nextStep, storeCarSize } = this.props;
        const { selected } = this.state;
        e.preventDefault();
        if (!selected) {
            return null;
        }
        storeCarSize(selected)
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
                <h1 styleName="main-title">Which do you prefer?</h1>
                <input onClick={() => this.setSelected('Small')} id="option-one" styleName="action-option" name="which-do-you-prefer" type="radio" value="Small"/>
                <label htmlFor="option-one" styleName="action-option-label">Something small</label>
                <p styleName="text">or</p>            
                <input onClick={() => this.setSelected('Big')} id="option-two" styleName="action-option" name="which-do-you-prefer" type="radio" value="Big"/>
                <label styleName="action-option-label" htmlFor="option-two">Something big</label>   
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarSizeStep, styles);
