import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: ''
            }
        }

        // this is because javascript
        this.onTitleChange = this
            .onTitleChange
            .bind(this);
        this.onCLickSave = this
            .onCLickSave
            .bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: 
                course
            })
    }

    onCLickSave() {
        alert(`Saving ${this.state.course.title}`);
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>courses</h1>
                <h2>add a course</h2>
                <input
                    type="text"
                    name="title"
                    label="Title"
                    value={this.state.course.title}
                    onChange={this.onTitleChange}/>
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary"
                    onClick={this.onCLickSave}/>
                <CourseList courses={courses}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);