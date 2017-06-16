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
            avoCalculatorParameters: Object.assign({}, props.avoCalculatorParameters),
            avoCalculatorResults: Object.assign({}, props.avoCalculatorResults)

        }
        this.updateAvoCalculatorParameterState = this
            .updateAvoCalculatorParameterState
            .bind(this);
    }

    render() {
        return (
            <div>
                
                <Row>                    
                    <Col md={6}>
                        <AvoCalculatorForm
                            avoCalculatorParameters={this.state.avoCalculatorParameters}
                            onParameterChange={this.updateAvoCalculatorParameterState}/>
                    </Col>
                    <Col md={6}>
                        <AvoCalculatorResult avoCalculatorResults={this.state.avoCalculatorResults}/>
                    </Col>
                </Row>
            </div>
        )
    }

    calculateResults(avoCalculatorParameters) {
        let ac = new AvoCalculator();
        return ac.calculateResult(avoCalculatorParameters);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({avoCalculatorParameters: nextProps.avoCalculatorParameters});
        this.setState({avoCalculatorResults: nextProps.avoCalculatorResults});
    }
    updateAvoCalculatorParameterState(event) {
        const field = event.target.name;
        //not a deep copy so manually do the sub props
        let avoCalculatorParameters = Object.assign({}, this.state.avoCalculatorParameters);
        avoCalculatorParameters.lattes = Object.assign({}, this.state.avoCalculatorParameters.lattes);
        avoCalculatorParameters.avoBreakfasts = Object.assign({}, this.state.avoCalculatorParameters.avoBreakfasts);
             avoCalculatorParameters.personalSavings = Object.assign({}, this.state.avoCalculatorParameters.personalSavings);
        let fieldNames = field.split(".");
        if (fieldNames.length === 2) {
            avoCalculatorParameters[fieldNames[0]][fieldNames[1]] = event.target.value;
        } else {
            avoCalculatorParameters[fieldNames[0]] = event.target.value;
        }
        // this.setState({avoCalculatorParameters});
        this
            .props
            .actions
            .updateParameters(avoCalculatorParameters)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(avoCalculatorActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {avoCalculatorParameters: state.avoCalculatorParameters, avoCalculatorResults: state.avoCalculatorResults};

}

export default connect(mapStateToProps, mapDispatchToProps)(AvoCalculatorPage);