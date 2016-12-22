import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import HowItWorks from '../HowItWorks/HowItWorks';
import HowMuchCanIEarn from '../HowMuchCanIEarn/HowMuchCanIEarn';
import AvailableCars from '../AvailableCars/AvailableCars';
import Feedback from '../Feedback/Feedback';


    const feedbacks = [
        {
        userName: "Joe Montana",
        feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quo tandem modo? Ego vero volo in virtute vim esse quam maximam; Duo Reges: constructio interrete. Quod quidem nobis non saepe contingit. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. Zenonis est, inquam, hoc Stoici. Nam his libris eum malo quam reliquo ornatu villae delectari."
        }
    ];


function Home () {

    return (
        <div>
            <Hero />
            <HowItWorks />
            <HowMuchCanIEarn />
            <AvailableCars />
            <Feedback 
            feedbacks={feedbacks}
            />
        </div>
    );
}

export default Home;