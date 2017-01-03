import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './NavBar.less';

class App extends Component {

    componentDidMount () {
        const content = document.body.scrollHeight;
        const screenHeight = window.screen.height;
        if (content > screenHeight) {
            document.addEventListener('scroll', this.onScroll);
        }
    }

    onScroll = () => {
        window.scrollY >= 0 + 1 ? this.navbar.classList.add(styles.fixed) :
        this.navbar.classList.remove(styles.fixed);
    }

    render() {
        return (
            <div styleName="container" ref={(c) => { this.navbar = c; }} >
                <nav role="nav" styleName="navbar">
                    <Link to={'/'} styleName="action-home" >carmi</Link>
                    <p styleName="phone-number">0203 856 8523</p>
                </nav>
            </div>
        );
    }
}

export default CSSModules(App, styles);
