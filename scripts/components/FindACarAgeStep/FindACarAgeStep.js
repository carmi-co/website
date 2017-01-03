import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarAgeStep.less';



class FindACarAgeStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    saveAndContinue = (e) => {
        const { saveValues, nextStep } = this.props;
        const { selected } = this.state;
        e.preventDefault();
        let data = {
            typePrefer : this.age.value
        }
        saveValues(data);
        nextStep();
    }

    handleRange = (e) => {
        this.age.value = this.ageSlider.value;
    }

    handleInputBlur = (e) => {
        if (Number(this.age.value) < 18) {
            this.age.value = 18;
        }
        if (Number(this.age.value) > 99) {
            this.age.value = 99;
        }
    }

    handleInput = (e) => {
        this.ageSlider.value = this.age.value;
    }

    handlePreviousStep = (e) => {
        const { previousStep } = this.props;
        e.preventDefault();
        previousStep();
    }

    render() {
        return (
            <div styleName="container">
                <label htmlFor="option-one" styleName="main-title">How old are you?</label>
                <input onBlur={this.handleInputBlur} onChange={this.handleInput} styleName="input" ref={(c) => { this.age = c; }} id="option-one" type="input" defaultValue="18"/>
                <input ref={(c) => { this.ageSlider = c; }} onChange={this.handleRange} styleName="input-range" type="range" min="18" max="99" defaultValue="18"/>
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarAgeStep, styles);
