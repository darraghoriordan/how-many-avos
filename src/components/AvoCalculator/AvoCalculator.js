import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class AvoCalculator extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: {
                title: ''
            }
        };
    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        )
    }

    render() {

        return (
            <div>
                <h1>courses</h1>
                {this
                    .props
                    .courses
                    .map(this.courseRow)}

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    return {courses: state.courses};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AvoCalculator);