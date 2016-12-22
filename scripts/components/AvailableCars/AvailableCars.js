import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './AvailableCars.less';
import CarCard from '../CarCard/CarCard';

function AvailableCars (props) {
    let { cars } = props;
    cars = [
        {           
            name:'Fiat 500',
            cost: 1200, 
            earning:60,
            expected:100,
        },
        {           
            name:'Ford Focus',
            cost: 12000, 
            earning:130,
            expected:500,
        },
        {           
            name:'Ford Explorer',
            cost: 23000, 
            earning:160,
            expected:200,
        }
    ];

    return (
        <div styleName="container">
            <h1 styleName="main-title">Available <span styleName="text-color-branded">cars</span></h1>
            <ul styleName="cars-list">
            {cars.map( (car, i)  => {
                const { imageURL, name, cost, earning, expected } = car;
                return (
                    <li styleName='car-card' key={i}>
                        <CarCard
                        imageURL={imageURL}
                        name={name}
                        cost={cost} 
                        earning={earning}
                        expected={expected}
                        />
                    </li>
                );
            })}
            </ul>
        </div>
    );
}

export default CSSModules(AvailableCars, styles);