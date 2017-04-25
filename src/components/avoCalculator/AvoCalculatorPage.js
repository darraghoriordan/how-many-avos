import React from 'react';
import AvoCalculatorForm from './AvoCalculatorForm'
import {connect} from 'react-redux';
import * as avoCalculatorActions from '../../actions/avoCalculatorActions';
import {bindActionCreators} from 'redux';

export class AvoCalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateAvoCalculatorParameterState = 
        this.updateAvoCalculatorParameterState.bind(this);
    }

    render() {
        return (
            <div>
                <h1>How Many Avos</h1>
                <AvoCalculatorForm 
                avoCalculatorModel={this.props.avoCalculatorModel}
                onParameterChange={this.updateAvoCalculatorParameterState}/>
            </div>
        )
    }

    updateAvoCalculatorParameterState(event) {
        const field = event.target.name;
        let avoCalculatorParameters = Object.assign({},this.props.avoCalculatorModel.avoCalculatorParameters);
        avoCalculatorParameters[field] = event.target.value;
        this.props.actions.calculateResult(avoCalculatorParameters);
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(avoCalculatorActions, dispatch)
  };
}

function mapStateToProps(state) {
    let avoCalculatorModel = state.avoCalculatorModel;
    return {avoCalculatorModel};
}

export default connect(mapStateToProps, mapDispatchToProps)(AvoCalculatorPage);