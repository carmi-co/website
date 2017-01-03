import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './SelectACar.less';
import Wizard from '../Wizard/Wizard';
import SelectACarBrand from '../SelectACarBrand/SelectACarBrand';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContactMenu from '../ContactMenu/ContactMenu';
import cars from '../SelectACarBrand/carsDB';
import SelectCarStep from '../SelectCarStep/SelectCarStep';
import SelectACarPostalcodeStep from '../SelectACarPostalcodeStep/SelectACarPostalcodeStep';
import SelectACarNameStep from '../SelectACarNameStep/SelectACarNameStep';
import SelectACarFinalStep from '../SelectACarFinalStep/SelectACarFinalStep';

let fieldValues = {
  brand: null,
  model: null,
  username: null,
  email: null
}

function percentage(currentStep = 1, steps = 1) {
    return (currentStep * 100) / steps;
}

class FindACar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
    }

    saveValues(fields) {
        // return function() {
        //     fieldValues = Object.assign({}, fieldValues, fields);
        // }();
        fieldValues = Object.assign({}, fieldValues, fields);
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        });
    }

    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step : step - 1
        });
    }

    renderStep () {
        switch (this.state.step) {
            case 1:
                return <SelectCarStep brand={cars.filter(item => item.brand === fieldValues.brand )[0]}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
            case 2:
                return <SelectACarPostalcodeStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 3:
                return <SelectACarNameStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 4:
                return <SelectACarFinalStep fieldValues={fieldValues}/>

            default:
                return null;
        }
    }

    render() {
        return (
            <div styleName="container">
                <div styleName="header">
                    <NavBar />
                </div>
                <div styleName="content">
                    <div styleName="left-column">
                        <SelectACarBrand cars={cars}
                        nextStep={this.nextStep}
                        saveValues={this.saveValues}
                        />
                    </div>
                    <div styleName="right-column">
                    { this.renderStep()}
                    </div>
                </div>
                <div styleName="footer">
                    <ContactMenu />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default CSSModules(FindACar, styles);