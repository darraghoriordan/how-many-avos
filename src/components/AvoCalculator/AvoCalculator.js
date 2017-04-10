import React, {PropTypes} from 'react';

class AvoCalculator extends React.Component{
    constructor(props, context){
        super (props, context);

        this.state = {
            course: {title: null}
        };
    }

    render(){
        return (
            <div>
                <h1>Calculator</h1>
            </div>
        )
    }
}