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
import Footer from './Components/Footer';


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

          </div>
        )
      }
    }



    return (
      <div className="App">
      <Router>
        <div>
          {(!this.state.userLoggedIn)?
            <div>
              <Route path="/home" render={(props) => {
                    return <Redirect to="/"/>
                  }
                }/>
              <Route path="/profile/:id" render={(props, id) => {
                    return <Redirect to="/"/>
                  }
                } />
              <Route path="/rank" render={(props) => {
                    return <Redirect to="/"/>
                  }
                } />
              <Route path="/play" render={(props) => {
                    return <Redirect to="/"/>
                  }
                } />
              <Route path="/search" render={(props) => {
                    return <Redirect to="/"/>
                  }
                }/>
              <Route path="/" render={(props) => {
                    return (<Login {...props} isLoaded={this.toggleOnLogin}
                        isLoggedIn={this.toggleUserLoggedIn}/>
                    )}}/>
            </div>

          :
          <div>

          <Header />

          <div className="row">
            <div className="col-2">
              {(localStorage.getItem('loginPage'))? "":navBar}
            </div>
            <div className="col-10 main">
            <Route exact path="/" render={(props) => {
                  if (this.state.userLoggedIn) {
                    localStorage.removeItem('loginPage')
                    return <Redirect to="/home"/>
                  } else {
                    localStorage.setItem('loginPage', true)
                    return (
                      <div>

                         <Login {...props} isLoaded={this.toggleOnLogin}
                        isLoggedIn={this.toggleUserLoggedIn}/>
                      </div>
                    )
                  }
                }
              }
            />
            <Route path="/home" component={Home}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route path="/rank" component={Rank}/>
            <Route path="/play" component={Play}/>
            <Route path="/search" component={Search}/>
          </div>
        </div>

        <Footer />
        </div>
      }

        </div>
      </Router>

      </div>
    );
  }
}

export default App;
