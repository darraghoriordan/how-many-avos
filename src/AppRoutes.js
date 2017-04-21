import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AvoCalculatorPage from './components/avoCalculator/AvoCalculatorPage';
import CoursePage from './components/courses/CoursePage';
import ManageCoursePage from './components/courses/ManageCoursePage';

class AppRoutes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Switch>
          <Route path="/courses" component={CoursePage}/>
          <Route path="/course" component={ManageCoursePage}/>
          <Route path="/course:id" component={ManageCoursePage}/>
          </Switch>         
          <Route path="/howmanyavos" component={AvoCalculatorPage}/>    
      </div>
    )
  }
}
export default AppRoutes