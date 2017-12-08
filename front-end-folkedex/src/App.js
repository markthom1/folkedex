import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './Components/Login';
import Nav from './Components/Nav';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Rank from './Components/Rank/Rank';
import Play from './Components/Play/Play';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Nav></Nav>
          <Route exact path="/" component={ Home } />
          <Route path="/profile" component={ Profile } />
          <Route path="/rank" component={ Rank } />
          <Route path="/play" component={ Play } />
        </div>
      </Router>
        <Login />
      </div>
    );
  }
}

export default App;
