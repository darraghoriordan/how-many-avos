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

        this.onTitleChange = this
            .onTitleChange
            .bind(this);
        this.onClickSave = this
            .onClickSave
            .bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this
            .props
            .actions
            .createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        )
    }

    render() {

        return (
            <div>
                <h2>{this
                        .props
                        .courses
                        .map(this.courseRow)}</h2>
                <h1>Calculator</h1>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>

                <input type="submit" value="Save" onClick={this.onClickSave}/>
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