import React from 'react';
import AvoCalculatorForm from './AvoCalculatorForm'
import AvoCalculatorResult from './AvoCalculatorResult'
import {connect} from 'react-redux';
import * as avoCalculatorActions from '../../actions/avoCalculatorActions';
import {bindActionCreators} from 'redux';
import AvoCalculator from '../../calculators/avoCalculator';
import {Row, Col} from 'react-bootstrap';

export class AvoCalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            avoCalculatorParameters: Object.assign({}, props.avoCalculatorParameters)
        }
        this.updateAvoCalculatorParameterState = this
            .updateAvoCalculatorParameterState
            .bind(this);
    }

    render() {
        return (
            <div>
                <h1>How Many Avos</h1>
                <Row>
                    <Col md={6}>
                        <AvoCalculatorForm
                            avoCalculatorParameters={this.state.avoCalculatorParameters}
                            onParameterChange={this.updateAvoCalculatorParameterState}/>
                    </Col>
                    <Col md={6}>
                        <AvoCalculatorResult
                            avoCalculatorResults={this.calculateResults(this.state.avoCalculatorParameters)}/>
                    </Col>
                </Row>
            </div>
        )
    }

    calculateResults(avoCalculatorParameters) {
        let ac = new AvoCalculator();
        return ac.calculateResult(avoCalculatorParameters);
    }

    /// componentWillReceiveProps(nextProps) {     if
    // (this.props.avoCalculatorModel.avoCalculatorResults.deposit <= 0) {
    // // Necessary to populate form when existing course is loaded directly.
    //  let avoCalculatorParameters = Object.assign({},
    // nextProps.avoCalculatorModel.avoCalculatorParameters);         this
    //   .props             .actions
    // .calculateResult(avoCalculatorParameters);     } }

    updateAvoCalculatorParameterState(event) {
        const field = event.target.name;
        let avoCalculatorParameters = Object.assign({}, this.props.avoCalculatorParameters);

        let fieldNames = field.split(".");
        if (fieldNames.length === 2) {
            avoCalculatorParameters[fieldNames[0]][fieldNames[1]] = event.target.value;
        } else {
            avoCalculatorParameters[fieldNames[0]] = event.target.value;
        }
        this.setState({avoCalculatorParameters});
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(avoCalculatorActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {avoCalculatorParameters: state.avoCalculatorParameters};

}

export default connect(mapStateToProps, mapDispatchToProps)(AvoCalculatorPage);