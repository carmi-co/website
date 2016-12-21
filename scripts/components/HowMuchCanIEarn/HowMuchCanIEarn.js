import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HowMuchCanIEarn.less';
import computer from "./computer.png";



function HowMuchCanIEarn () {
    return (
        <div styleName="container">
            <div styleName="content">
                <h1 styleName="main-title">How much <span styleName="text-color-branded">can I earn</span> ?</h1>
                <p styleName="text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi enim, venenatis in justo sed.</p>
                <form action="http://www.carmy-api.com/query">
                    <div styleName="form-top">
                        <div styleName="form-top-column">
                            <label htmlFor="postcode" styleName="label">Postcode</label>
                            <input id="postcode" styleName="input-box" type="text" />
                        </div>
                        <div styleName="form-top-column">            
                            <label htmlFor="car-type" styleName="label">Car type</label>
                            <input id="car-type" styleName="input-box" type="text" />
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
                    <input styleName="action-form" type="submit" value="CALCULATE NOW" />
                </form>
            </div>
        </div>
    );
}

export default CSSModules(HowMuchCanIEarn, styles);