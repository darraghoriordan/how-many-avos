import React from 'react';

class AvoCalculator extends React.Component{
    constructor(props, context){
        super (props, context);

        this.state = {
            course: {title: ''}
        };
    }

    render(){
        return (
            <div>
                <h1>Calculator</h1>
                <input 
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title} />

                <input 
                type="submit" 
                value="Save"
                onClick={this.onClickSave}/>
            </div>
        )
    }
}

export default AvoCalculator;