import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './SelectACarBrand.less';

class SelectACarBrandStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandSelected: null
        }
    }

    handleClickBrand(brand) {
        const { saveValues, nextStep} = this.props;
        this.setState({ brandSelected: brand });
        saveValues({ brand: brand });
        nextStep();
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
        const { cars } = this.props;
        return (
            <section styleName="container">
                <h1 styleName="main-title">Brands</h1>
                <ol styleName="brand-list">
                {cars.map( (car, index) => {
                    return (
                        <li styleName="brand-list-item" key={index}>
                            <button styleName="brand-list-button" onClick={ () => { this.handleClickBrand(car.brand) }}>{car.brand}</button>
                        </li>
                    );
                })}
                </ol>
            </section>
        );
    }
}

export default CSSModules(SelectACarBrandStep, styles);
