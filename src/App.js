import React, {Component, PropTypes} from 'react';
import './App.css';
import Header from './components/common/Header';
import AppRoutes from './AppRoutes';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header loading={true}/>
        <div className="container-fluid">
          <AppRoutes/>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state, newProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

// export default connect(mapStateToProps)(App);
export default App;
