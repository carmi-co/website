import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HowMuchCanIEarn.less';
import computer from "./computer.png";
import { Element } from 'react-scroll';
import calculateRate from '../../utilities/calculator';
import { validatePostcode, normalisePostcode, outcodePostcode } from '../../utilities/postcodeValidate';

class HowMuchCanIEarn extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }
    
    handleSize = (e) => {
        if (!this.userPostcode.value || !validatePostcode(this.userPostcode.value)) {
            return null;
        }
        return calculateRate(this.userCarSize.value, outcodePostcode(this.userPostcode.value));
    }

    handleClose = (e) => {
        e.preventDefault();
        return this.setState({ showPopup: false })
    }

    renderQuote () {
        if (this.state.showPopup && this.userPostcode.value && this.userPostcode.value) {
            const value = this.handleSize.bind(this);
            return (
                <div styleName="popup">
                    <button styleName="popup-action" onClick={this.handleClose}>Close</button>
                    <p>With the current demand in your area and the type of car you have chosen, our estimate is that you will be able to earn the following per month: £{value()} per month (equals 3 days a month)</p>
                    <p>In order to get to this estimate we have collected data from the biggest P2P providers in the country to understand the demand in your area and average prices.</p>
                    <p>Please note that this is an estimate and that you will not be guaranteed to be able to rent your car out as much as we have listed above. However, it might also be that you will be able to rent your car our more than noted above. Also note that time of day, number of days available and weekdays/weekends plays a role in how much you can earn a month.</p>
                </div>
            );
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    handleCalculate = (e) => {
        e.preventDefault();
        this.setState({ showPopup: true })
    }

    render() {
        return (
            <Element styleName="container" name="how-much">
                {this.renderQuote()}
                <div styleName="content" >
                    <h1 styleName="main-title">How much <span styleName="text-color-branded">can I earn</span> ?</h1>
                    <p styleName="text-content">Put in your postcode, the car type you are looking to acquire and when you are looking to share and we’ll give you idea of how much you can earn a month by sharing.</p>
                    <form onSubmit={this.onSubmit}>
                        <div styleName="form-top">
                            <div styleName="form-top-column">
                                <label htmlFor="postcode" styleName="form-label">Postcode</label>
                                <input ref={(c) => { this.userPostcode = c; }} onBlur={this.handlePostCode} id="postcode" styleName="input-box" type="text" placeholder="enter your postcode" />
                            </div>
                            <div styleName="form-top-column">        
                                <label htmlFor="car-type" styleName="form-label">Car type</label>
                                <select ref={(c) => { this.userCarSize = c; }} onChange={this.handleSize} id="car-type" styleName="input-box-select" >
                                    <option value="small">Small sized car</option>
                                    <option value="medium">Medium sized car</option>
                                    <option value="large">Big sized car</option>
                                </select>
                            </div>
                        </div>
                        <p styleName="form-title">WHEN ARE YOU PLANNING TO SHARE YOUR CAR?</p>                
                        <div styleName="form-bottom">
                            <input id="varied" styleName="input-radio" type="radio" name="time" value="varied" />
                            <label styleName="radio-label" htmlFor="varied">Varied times</label>
                            <input id="weekdays" styleName="input-radio"type="radio" name="time" value="weekdays" />
                            <label styleName="radio-label" htmlFor="weekdays">Weekdays</label>
                            <input id="weekends" styleName="input-radio" type="radio" name="time" value="weekends" />
                            <label styleName="radio-label" htmlFor="weekends">Weekends</label>
                        </div>
                        <input onClick={this.handleCalculate} styleName="action-form" type="submit" value="CALCULATE NOW" />
                    </form>
                </div>
            </Element>
        );
    }
}

export default CSSModules(HowMuchCanIEarn, styles);