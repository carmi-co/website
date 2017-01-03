import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarVehicleTypeStep.less';



class FindACarVehicleTypeStep extends Component {
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
        const { saveValues, nextStep } = this.props;
        const { selected } = this.state;
        e.preventDefault();
        let data = {
            typePrefer : this.state.selected
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
                <h1 styleName="main-title">Which do you prefer?</h1>
                <input onClick={() => this.setSelected('sporty')} id="option-one" styleName="action-option" name="which-do-you-prefer" type="radio" value="sporty"/>
                <label htmlFor="option-one" styleName="action-option-label">Something sporty</label>                    
                <p styleName="text">or</p>
                <input onClick={() => this.setSelected('comfortable')} id="option-two" styleName="action-option" name="which-do-you-prefer" type="radio" value="comfortable"/>
                <label htmlFor="option-two" styleName="action-option-label">Something comfortable</label>
                <div styleName="action-group">
                    <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </section>
        );
    }
}

export default CSSModules(FindACarVehicleTypeStep, styles);
