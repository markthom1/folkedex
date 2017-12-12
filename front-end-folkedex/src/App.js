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
import Header from './Components/Header';
import Search from './Components/Search/Search';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onLoginPage: localStorage.getItem('loginPage'),
      userLoggedIn: JSON.parse(localStorage.getItem('session'))
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
          <div>
            <div className="row">
              <Header />
            </div>
            <div className="row">
              <div className="col-2">
                {(localStorage.getItem('loginPage'))? "":navBar}
              </div>
              <div className="col-10">
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
                      {(localStorage.getItem('loginPage'))? "":navBar}
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
          <Route path="/profile/:id" render={(props, id) => {
                return loginRedirect(<Profile/>)
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
          <Route path="/search" render={(props) => {
                return loginRedirect(<Search />)
              }
            }/>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
