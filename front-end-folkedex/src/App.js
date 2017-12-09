import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Login from './Components/Login';
import Nav from './Components/Nav';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Rank from './Components/Rank/Rank';
import Play from './Components/Play/Play';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onLoginPage: localStorage.getItem('loginPage'),
      userLoggedIn: localStorage.getItem('session')
    }

    this.toggleOnLogin = this.toggleOnLogin.bind(this)
    this.toggleUserLoggedIn = this.toggleUserLoggedIn.bind(this)
  }

  toggleOnLogin(state) {
    this.setState({
        onLoginPage: state
      })
  }

  toggleUserLoggedIn(state) {
    this.setState({
        userLoggedIn: state
      })
  }

  render() {

    console.log('mount app');
    let loginRedirect = (component) => {
      if (!this.state.userLoggedIn) {
        localStorage.removeItem('loginPage')
        console.log('here2');
        return (
          <div>
            {(localStorage.getItem('loginPage'))? "":<Nav />}
            {component}
          </div>
        )
      } else {
        localStorage.removeItem('loginPage')
        return (
          <div>
            {(localStorage.getItem('loginPage'))? "":<Nav />}
            {component}
          </div>
        )
      }
    }

    return (
      <div className="App">
      <Router>
        <div>
        //How do I know what where the app is going to before this loads!!!

          <Route exact path="/" render={(props) => {
                if (this.state.userLoggedIn) {
                  localStorage.removeItem('loginPage')
                  return <Redirect to="/home"/>
                } else {
                  console.log('here');
                  localStorage.setItem('loginPage', true)
                  return (
                    <div>
                      {(localStorage.getItem('loginPage'))? "":<Nav />}
                       <Login {...props} isLoaded={this.toggleOnLogin}
                      isLoggedIn={this.toggleUserLoggedIn}/>
                    </div>
                  )
                }
              }
            }
          />
          <Route path="/home" render={(props) => {
                return loginRedirect(<Home />)
              }
            }/>
          <Route path="/profile" component={ Profile } />
          <Route path="/rank" component={ Rank } />
          <Route path="/play" component={ Play } />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
