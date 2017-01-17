import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect, dispatch } from 'react-redux';
import styles from './FindACarContainer.less';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import ContactMenu from '../Components/ContactMenu/ContactMenu';
import {
    storeCarPrice,
    storeCarSize,
    storeCarType,
    storeUserAge,
    storeUserEmail,
    storeUserName,
    storeUserMobile,
    storeUserPostcode
} from '../actions/findACarActions';

@CSSModules(styles)
class FindACarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }

    nextStep = () => {
        const { step } = this.state;
        const currentState = step;
        this.setState({
            step : step + 1
        });
        const path = `/find/${this.renderStep(currentState + 1 )}`
        return browserHistory.push(path)
    }

    previousStep = () => {
        const { step } = this.state;
        const currentState = step;
        if (this.state.step > 1) {
            this.setState({
                step : step - 1
            });
            const path = `/find/${this.renderStep(currentState - 1)}`
            return browserHistory.push(path)
        }
    }

    renderStep = (stepNumber) => {
        const stepName = {
            1: "carcost",
            2: "carsize",
            3: "cartype",
            4: "userage",
            5: "userpostcode",
            6: "useremail",
            7: "username",
            8: "usermobilenumber",
            9: "thankyou"
        }
        return stepName[stepNumber];
    }

    renderChildren = (children) => {
        const {
            storeCarPrice,
            storeCarSize,
            storeCarType,
            storeUserAge,
            storeUserEmail,
            storeUserName,
            storeUserMobile,
            storeUserPostcode
        } = this.props;
        
        const el = React.Children.map(children,
            (child) => React.cloneElement(child, {
                nextStep: this.nextStep,
                previousStep: this.previousStep,
                storeCarPrice,
                storeCarSize,
                storeCarType,
                storeUserAge,
                storeUserEmail,
                storeUserName,
                storeUserMobile,
                storeUserPostcode
            })
        );
        return (
        <div styleName="content">
            {el}
         </div>
        )
    }

    render() {
        return (
            <div styleName="container">
                <div styleName="header">
                    <NavBar />
                </div>
                {this.renderChildren(this.props.children)}
                <div styleName="footer">
                    <ContactMenu />
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        carPrice: state.findACar.carPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        storeCarPrice,
        storeCarSize,
        storeCarType,
        storeUserAge,
        storeUserEmail,
        storeUserName,
        storeUserMobile,
        storeUserPostcode
    }
    return bindActionCreators({...actions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FindACarContainer);