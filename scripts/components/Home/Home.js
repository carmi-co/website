import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import HowItWorks from '../HowItWorks/HowItWorks';
import HowMuchCanIEarn from '../HowMuchCanIEarn/HowMuchCanIEarn';


function Home () {
    return (
        <div>
            <Hero />
            <HowItWorks />
            <HowMuchCanIEarn />
        </div>
    );
}

export default Home;