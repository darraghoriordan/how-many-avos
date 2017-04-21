import React, {Component, PropTypes} from 'react';
import './App.css';
import Header from './components/common/Header';
import AppRoutes from './AppRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header loading={false}/>
        <div className="container-fluid">
     <AppRoutes/>
        </div>
    
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;
