import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './WhichDoYouPrefer.less';



class WhichDoYouPrefer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    setSelected(data) {
        return this.setState({selected: data});
    }

    saveAndContinue = (e) => {
        const { saveValues, nextStep } = this.props;
        const { selected } = this.state;
        e.preventDefault();
        let data = {
            carPrefer : this.state.selected
        }
        saveValues(data);
        nextStep();
    }

    render() {
        return (
            <div styleName="container">
                <h1 styleName="main-title">Which do you prefer?</h1>
                <form>
                    <label htmlFor="least-expensive">LeastExpensive</label>
                    <input onClick={() => this.setSelected('Least Expensive')} id="least-expensive" styleName="action" name="which-do-you-prefer" type="radio" value="Least expensive"/>
                    <p styleName="text">or</p>
                    <label htmlFor="premium">Premium</label>                    
                    <input onClick={() => this.setSelected('Premium')} id="premium" styleName="action" name="which-do-you-prefer" type="radio" value="Premium"/>
                </form>
                <div styleName="action-group">
                    <button styleName="action-back">Back</button>
                    <button styleName="action-next" onClick={this.saveAndContinue}>Next</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(WhichDoYouPrefer, styles);
