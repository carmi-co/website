import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACar.less';
import Wizard from '../Wizard/Wizard';
import FindACarCostStep from '../FindACarCostStep/FindACarCostStep';
import FindACarSizeStep from '../FindACarSizeStep/FindACarSizeStep';
import FindACarVehicleTypeStep from '../FindACarVehicleTypeStep/FindACarVehicleTypeStep';
import FindACarAgeStep from '../FindACarAgeStep/FindACarAgeStep';
import FindACarPostcodeStep from '../FindACarPostcodeStep/FindACarPostcodeStep';
import FindACarEmailStep from '../FindACarEmailStep/FindACarEmailStep';
import FindACarUsernameStep from '../FindACarUsernameStep/FindACarUsernameStep';
import FindACarMobileNumberStep from '../FindACarMobileNumberStep/FindACarMobileNumberStep';
import FindACarFinalStep from '../FindACarFinalStep/FindACarFinalStep';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContactMenu from '../ContactMenu/ContactMenu';



let fieldValues = {
  carPrefer: null,
  sizePrefer: null,
  postCode: null
}

function percentage(currentStep = 1, steps = 1) {
    return (currentStep * 100) / steps;
}

class FindACar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }

    saveValues(fields) {
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
                return <FindACarCostStep fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
            case 2:
                return <FindACarSizeStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 3:
                return <FindACarVehicleTypeStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 4:
                return <FindACarAgeStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 5:
                return <FindACarPostcodeStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 6:
                return <FindACarEmailStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 7:
                return <FindACarUsernameStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 8:
                return <FindACarMobileNumberStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
            case 9:
                return <FindACarFinalStep fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
        }
    }

    render() {
        return (
            <div styleName="container">
                <div styleName="header">
                    <NavBar />
                </div>
                <div styleName="content">
                    { this.renderStep()}
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