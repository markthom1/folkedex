import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';

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

    let navBar = <Nav isLoggedIn={this.toggleUserLoggedIn}/>

    let loginRedirect = (component) => {
      if (!this.state.userLoggedIn) {
        localStorage.removeItem('loginPage')
        return <Redirect to="/"/>
      } else {
        localStorage.removeItem('loginPage')
        return (
          <div className="row">
            <div className="col-2">
              {(localStorage.getItem('loginPage'))? "":<Nav isLoggedIn={this.toggleUserLoggedIn}/>}
            </div>
            <div className="col-10">
              <div className="row">
              {component}
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <div className="App">
      <Router>
        <div>

          <Route exact path="/" render={(props) => {
                if (this.state.userLoggedIn) {
                  localStorage.removeItem('loginPage')
                  return <Redirect to="/home"/>
                } else {
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
          <Route path="/profile" render={(props) => {
                return loginRedirect(<Profile />)
              }
            } />
          <Route path="/rank" render={(props) => {
                return loginRedirect(<Rank />)
              }
            } />
          <Route path="/play" render={(props) => {
                return loginRedirect(<Play />)
              }
            } />
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
