import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AvoCalculator from './components/avoCalculator/AvoCalculator';

class AppRoutes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/calc" component={AvoCalculator}/>
      </div>
    )
  }
}
export default AppRoutes