import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FindACar.less';
import Wizard from '../Wizard/Wizard';
import WhichDoYouPrefer from '../WhichDoYouPrefer/WhichDoYouPrefer';
import WhatIsYourPostCode from '../WhatIsYourPostCode/WhatIsYourPostCode';



var fieldValues = {
  carPrefer: null,
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
        this.setState({
            step : this.state.step - 1
        });
    }

    renderStep () {
        switch (this.state.step) {
            case 1:
                return <WhichDoYouPrefer fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
            case 2:
                return <WhatIsYourPostCode fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
        }
    }

    render() {
        return (
            <div styleName="container">
                { this.renderStep()}
            </div>
        );
    }
}

export default CSSModules(FindACar, styles);