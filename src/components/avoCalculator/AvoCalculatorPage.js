import React from 'react';
import AvoCalculatorForm from './AvoCalculatorForm'
import AvoCalculatorResult from './AvoCalculatorResult'
import {connect} from 'react-redux';
import * as avoCalculatorActions from '../../actions/avoCalculatorActions';
import {bindActionCreators} from 'redux';

export class AvoCalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.updateAvoCalculatorParameterState = this
            .updateAvoCalculatorParameterState
            .bind(this);
        this.componentWillReceiveProps = this
            .componentWillReceiveProps
            .bind(this);

        Object.resolve = function (path, obj) {
            return path
                .split('.')
                .reduce(function (prev, curr) {
                    return prev
                        ? prev[curr]
                        : undefined
                }, obj || self)
        }
    }

    render() {
        return (
            <div>
                <h1>How Many Avos</h1>
                <AvoCalculatorForm
                    avoCalculatorParameters={this.props.avoCalculatorModel.avoCalculatorParameters}
                    onParameterChange={this.updateAvoCalculatorParameterState}/>
                <AvoCalculatorResult
                    avoCalculatorResults={this.props.avoCalculatorModel.avoCalculatorResults}
                    avoCalculatorParameters={this.props.avoCalculatorModel.avoCalculatorParameters}/>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.avoCalculatorModel.avoCalculatorResults.deposit <= 0) {
            // Necessary to populate form when existing course is loaded directly.
            let avoCalculatorParameters = Object.assign({}, nextProps.avoCalculatorModel.avoCalculatorParameters);

            this
                .props
                .actions
                .calculateResult(avoCalculatorParameters);
        }
    }

    updateAvoCalculatorParameterState(event) {
        const field = event.target.name;
        let avoCalculatorParameters = Object.assign({}, this.props.avoCalculatorModel.avoCalculatorParameters);
        avoCalculatorParameters[field] = event.target.value;
        this
            .props
            .actions
            .calculateResult(avoCalculatorParameters);
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