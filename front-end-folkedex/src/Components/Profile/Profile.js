import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    return (
      <div>
        <h1>This is Profile</h1>
      </div>
    )
  }
}

export default Profile;
