import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACarCostStep.less';



class FindACarCostStep extends Component {
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
        if (!this.state.selected) {
            return null;
        }
        e.preventDefault();
        let data = {
            carPrefer : this.state.selected
        }
        saveValues(data);
        return nextStep();
    }

    render() {
        return (
            <div styleName="container">
                <h1 styleName="main-title">Which do you prefer?</h1>
                <input onClick={() => this.setSelected('Least Expensive')} id="least-expensive" styleName="action-option" name="which-do-you-prefer" type="radio" value="Least expensive"/>
                    <label htmlFor="least-expensive" styleName="action-option-label">Least expensive</label>
                <p styleName="text">or</p>
                <input onClick={() => this.setSelected('Premium')} id="premium" styleName="action-option" name="which-do-you-prefer" type="radio" value="Premium"/>
                <label styleName="action-option-label "htmlFor="premium">Premium</label>
                <div styleName="action-group">
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACarCostStep, styles);
