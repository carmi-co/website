import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import HowItWorks from '../HowItWorks/HowItWorks';
import HowMuchCanIEarn from '../HowMuchCanIEarn/HowMuchCanIEarn';
import AvailableCars from '../AvailableCars/AvailableCars';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import ContactMenu from '../ContactMenu/ContactMenu';
import Counter from '../Counter/Counter';

const feedbacks = [
    {
        userName: "Joe Montana",
        feedbackText: `I moved to London 3 years ago, but it was too expensive to bring my car with me. I've needed a car and have been wanting to find a smart solution. I had heard about car sharing before and thought there was nothing to loose with Carmi as it didn’t cost anything extra. They gave me a really good offer on the car I wanted that couldn’t be matched anywhere else. Delivery from the dealership was swift and I was put onto sharing platform automatically It’s smart and I can highly recommend Carmi`,
        imageURL: './public/img/julian-london.jpg'
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
            <ContactMenu />
            <Footer />
        </div>
    );
}

export default Home;