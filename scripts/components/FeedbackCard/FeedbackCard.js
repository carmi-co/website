import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './FeedbackCard.less';
import guestUserAvatar from './guest-user.png';

function FeedbackCard (props) {
    const { imageURL, feedbackText, userName } = props;
    return (
        <div styleName="container">
            <div styleName="feedback-text-group">
                <q styleName="user-quote">{feedbackText}</q>
                <p styleName="user-name">{ userName }</p>
            </div>
            <div styleName="image-container">
                <img styleName="image" src={ imageURL || guestUserAvatar } alt='user avatar' />
            </div>
        </div>
    );
}

export default CSSModules(FeedbackCard, styles);