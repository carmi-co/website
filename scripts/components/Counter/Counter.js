import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import styles from './Counter.less';
import { connect, dispatch } from 'react-redux';
import { increaseValue } from '../../actions/counterActions';


@CSSModules(styles)
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    
    increase = () => {
        this.props.increaseValue(1);
    }

    decreaseValue = () => {    
        this.props.decreaseValue(1);
    }

    render() {
        const { value } = this.props;
        return (
            <div styleName="container">
                <div>{value.value}</div>
                <button onClick={this.increase}> + </button>
                <button onClick={this.decreaseValue}> - </button>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        value: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseValue: bindActionCreators(
            increaseValue, dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);