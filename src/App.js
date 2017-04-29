import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './components/common/Header';
import AppRoutes from './AppRoutes';
// we need withRouter here becuase App is not defined in the router config. So
// the router is not telling redux that anything has changed via props.
import {withRouter} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header loading={this.props.loading}/>
        <div className="container">
          <AppRoutes/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, newProps) {
  return {

    loading: state.ajaxStatus > 0
  };
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps)(App));
//export default App;