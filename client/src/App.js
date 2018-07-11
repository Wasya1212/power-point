import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-navigation">
        <AppNavbar />
      </div>
    );
  }
}

export default App;
