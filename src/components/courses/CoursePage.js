import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.history = props.history;

        this.redirectToAddCoursePage = this
            .redirectToAddCoursePage
            .bind(this);
    }

    redirectToAddCoursePage() {    
         this.history.push('/course');       
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
               
                <h1>courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn-btn-primary"
                    onClick={this.redirectToAddCoursePage}/>

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