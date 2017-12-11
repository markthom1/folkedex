import React, { Component } from 'react';
import './Profile.css';
import ProfPic from './ProfPic';
import Friend from './Friend';
import Folk from './Folk';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.user=""
    this.state = {
      hasState: true
    }
  }

  componentWillMount() {
    var user = JSON.parse(localStorage.getItem('session')).user;

    if (this.props.person === user.id) {
      this.user = user
    } else {
      var options = {
        method: 'GET',
        headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
         id: this.person
        })
      }

        fetch('http://localhost:3000/users/profile', options)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          // if (responseJson.id) {
          //
          // } else {
          //   console.log('Error Occured: ',responseJson);
          // }

        })
        .catch(error => {
          console.log('did not handle biness!');
          console.log(error);
        });

    }
  }


  render () {
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    return (
      <div className="container">
        <ProfPic />
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
              <h4 className="friends-title">Friends</h4>
              <div className="container two-friends">
                <Friend />

              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="show-folks">
              <Folk />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
