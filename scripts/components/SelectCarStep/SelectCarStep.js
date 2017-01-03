import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './SelectCarStep.less';



class SelectCarStep extends Component {
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

    handleClick = (model) => {
        const { saveValues, nextStep } = this.props;
        const carModel = model;
        saveValues({ model: model });
        nextStep();
    }

    handlePreviousStep = (e) => {
        const { previousStep } = this.props;
        e.preventDefault();
        previousStep();
    }

    render() {
        const { brand } = this.props;
        return (
            <section styleName="container">
                <h1 styleName="main-title">Model</h1>
                <ol styleName="car-list">
                    {brand.models.map( (car, index) => {
                        return (
                            <li key={index} styleName="car-list-item">
                            <button  onClick={() => { this.handleClick(car.model) }} styleName="car-list-button" ref={(c) => { this.car = c; }}>{car.model}</button>
                            </li>
                        );
                    })}
                </ol>
            </section>
        );
    }
}

export default CSSModules(SelectCarStep, styles);

// <div styleName="action-group">
//     <button styleName="action-back" onClick={this.handlePreviousStep}>Back</button>
//     <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
// </div>