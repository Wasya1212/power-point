import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

import HomePage from './pages/frontpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <header className="header">
            <AppNavbar isAuthenticated={false}/>
          </header>
        </div>
        <div className="App-content">
          <Route exact path='/' component={HomePage} />
        </div>
        <div className="App-contacts">
          <AppFooter />
        </div>
    </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter history={createBrowserHistory()}>
        <App />
      </BrowserRouter>
    );
  }
}

export default Navigation;
