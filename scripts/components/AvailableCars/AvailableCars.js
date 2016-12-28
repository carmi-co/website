import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './AvailableCars.less';
import CarCard from '../CarCard/CarCard';
import landRoverEvoque from './land-rover-evoque.jpg';
import audiA3 from './audi-a3.jpg';
import vauxhallCorsa from './vauxhall-corsa.jpg';


function AvailableCars (props) {
    let { cars } = props;
    cars = [
        {           
            name:'Land Rover Evoque',
            cost: 1200, 
            earning:60,
            expected:100,
            imageURL: landRoverEvoque
        },
        {           
            name:'Audi A3',
            cost: 12000, 
            earning:130,
            expected:500,
            imageURL: audiA3
        },
        {           
            name:'Vauxhall Corsa',
            cost: 23000, 
            earning:160,
            expected:200,
            imageURL: vauxhallCorsa
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