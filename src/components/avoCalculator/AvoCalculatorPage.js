import React from 'react';
import AvoCalculatorForm from './AvoCalculatorForm'
import {connect} from 'react-redux';
import * as avoCalculatorActions from '../../actions/avoCalculatorActions';
import {bindActionCreators} from 'redux';

class AvoCalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateAvoCalculatorState = this.updateAvoCalculatorState.bind(this);
    }

    render() {
        return (
            <div>
                <h1>How Many Avos</h1>
                <AvoCalculatorForm 
                avoCalculator={this.props.avoCalculator}
                onChange={this.updateAvoCalculatorState}/>
            </div>
        )
    }

    updateAvoCalculatorState(event) {
        const field = event.target.name;
        let avoCalculator = this.props.avoCalculator;
        avoCalculator[field] = event.target.value;
        this.props.actions.updateAvoCalculator(avoCalculator);
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(avoCalculatorActions, dispatch)
  };
}

function mapStateToProps(state) {
    debugger;
    let avoCalculator = state.avoCalculator;
    return {avoCalculator};
}

export default connect(mapStateToProps, mapDispatchToProps)(AvoCalculatorPage);