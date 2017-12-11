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
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    return (
      <div className="container">
        <div className="contains-prof-pic">
          <img src={pic} alt=""/>
          <p>Your Name</p>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="profile-info">
              <p>Region: </p>
              <p>Age Group: </p>
              <div className="progess">
                <p>Progress: (Title)</p>
                <div className="progress-bar">
                </div>
              </div>
            </div>
            <div className="friends-container">
              <h5>Friends</h5>
              <div className="container two-friends">
                <div className="friend">
                  <img src={pic} alt=""/>
                  <p>Friends name</p>
                </div>
                <div className="friend">
                  <img src={pic} alt=""/>
                  <p>Friends name</p>
                </div>
              </div>
              <div className="container two-friends">
                <div className="friend">
                  <img src={pic} alt=""/>
                  <p>Friends name</p>
                </div>
                <div className="friend">
                  <img src={pic} alt=""/>
                  <p>Friends name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="show-folks">
              <div className="folk">
                <img src={pic} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
