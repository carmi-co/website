import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './ContactMenu.less';

function ContactMenu () {
    return (
        <section styleName="container">
            <div styleName="content">
                <section styleName="contact-group">
                    <p>Contact</p>
                    <p styleName="contact-info">0203 856 8523</p>
                    <p styleName="contact-info">hello@carmi.co</p>
                </section>
                <section styleName="menu-group">
                    <ul styleName="menu">
                        <li styleName="menu-item"><a styleName="menu-link" href="/">Terms</a></li>
                        <li styleName="menu-item"><a styleName="menu-link" href="/">Privacy Policy</a></li>
                        <li styleName="menu-item"><a styleName="menu-link" href="/">About</a></li>
                        <li styleName="menu-item"><a styleName="menu-link" href="/">Search Cars</a></li>
                        <li styleName="menu-item"><a styleName="menu-link" href="/">Help</a></li>
                        <li styleName="menu-item"><a styleName="menu-link" href="/">Cookie Policy</a></li>
                        <li styleName="menu-item"><a styleName="menu-link" href="/">Careers</a></li>
                    </ul>
                </section>
                <section styleName="subscribe-group">
                    <form styleName="subscribe-form">
                        <input styleName="subscribe-input" type="text" placeholder="Sign up to our newsletter"/>
                        <input styleName="action" type="submit" value="subscribe" />
                    </form>
                </section>
            </div>
        </section>
    );
}

export default CSSModules(ContactMenu, styles);