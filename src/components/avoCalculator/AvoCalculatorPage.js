import React from 'react';
import AvoCalculatorForm from './AvoCalculatorForm'
import {connect} from 'react-redux';

class AvoCalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {avoCalculator: this.props.avoCalculator};

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
        let avoCalculator = this.state.avoCalculator;
        avoCalculator[field] = event.target.value;
        return this.setState({avoCalculator});
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.avoCalculator.deposit !== nextProps.avoCalculator.deposit) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({
                avoCalculator: Object.assign({}, nextProps.avoCalculator)
            });
        }
    }
}

function mapStateToProps(state) {
    let avoCalculator = state.avoCalculator;
    return {avoCalculator};
}
export default connect(mapStateToProps)(AvoCalculatorPage);