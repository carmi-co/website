import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './CarCard.less';
import cardDefaultImage from './car-default.png';




function CarCard (props) {
    const { imageURL, name, cost, earning, expected } = props;

    return (
        <div styleName="container">
            <div styleName="image-container">
                <img styleName="image" src={ imageURL || cardDefaultImage } alt='car' />
            </div>
            <div styleName="card-information">
                <h1 styleName="main-title">{ name }</h1>
                <table styleName="car-data">
                    <tbody>
                        <tr>
                            <th styleName="table-title">Monthly finance cost</th>
                            <td styleName="table-value">&pound;{cost || 0}</td> 
                        </tr>
                        <tr>
                            <th styleName="table-title">Monthly earnings potencial</th> 
                            <td styleName="table-value">&pound;{earning || 0}</td>
                        </tr>
                        <tr>
                            <th styleName="table-title">Net Monthly expected cost</th>
                            <td styleName="table-value-net">&pound;{expected || 0}</td>
                        </tr>
                    </tbody>
                </table>
                <button styleName="action">Buy Now</button>
            </div>
        </div>
    );
}

export default CSSModules(CarCard, styles);