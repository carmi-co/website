import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Feedback.less';
import FeedbackCard from '../FeedbackCard/FeedbackCard';



function Feedback (props) {
    const { feedbacks } = props;
    return (
        <div styleName="container">
            <h1 styleName="main-title">What do our <span styleName="text-color-branded">customers </span> think?</h1>
            <ul styleName="feedbacks-list">
            { feedbacks.map( (feedback, i) => {
                const { userName, feedbackText, imageURL} = feedback;
                return (
                    <li styleName="feedback-card" key={i}>
                        <FeedbackCard 
                        userName={userName}
                        feedbackText={feedbackText}
                        imageURL={imageURL}
                        />
                    </li>
                );
            })
            }
            </ul>
        </div>
    );
}

export default CSSModules(Feedback, styles);