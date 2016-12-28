import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HowMuchCanIEarn.less';
import computer from "./computer.png";
import { Element } from 'react-scroll';

function HowMuchCanIEarn () {
    return (
        <Element styleName="container" name="how-much">
            <div styleName="content" >
                <h1 styleName="main-title">How much <span styleName="text-color-branded">can I earn</span> ?</h1>
                <p styleName="text-content">Put in your postcode, the car type you are looking to acquire and when you are looking to share and we’ll give you idea of how much you can earn a month by sharing.</p>
                <form action="http://www.carmy-api.com/query">
                    <div styleName="form-top">
                        <div styleName="form-top-column">
                            <label htmlFor="postcode" styleName="form-label">Postcode</label>
                            <input id="postcode" styleName="input-box" type="text" placeholder="enter your postcode" />
                        </div>
                        <div styleName="form-top-column">        
                            <label htmlFor="car-type" styleName="form-label">Car type</label>
                            <select id="car-type" styleName="input-box-select" >
                                <option value="small">Small sized car</option>
                                <option value="medium">Medium sized car</option>
                                <option value="big">Big sized car</option>
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
                    <input styleName="action-form" type="submit" value="CALCULATE NOW" />
                </form>
            </div>
        </Element>
    );
}

export default CSSModules(HowMuchCanIEarn, styles);