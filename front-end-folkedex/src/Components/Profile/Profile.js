import React, { Component } from 'react';
import './Profile.css';
import ProfPic from './ProfPic';
import Friend from './Friend';
import Folk from './Folk';
import { NavLink } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userFriends: [ {
        age_group: "0-30",
        custom: "User logged in.",
        first_name: "Bill",
        id: 2,
        last_name: "Bob",
        region: "here",
        score: 0
      }
                    ],
      userFolks: [],
      user: {},
      hasState: true
    }

    this.friendProfile = this.friendProfile.bind(this)
  }

  friendProfile(e, index) {
    this.setState({
      user: this.state.userFriends[index]
    })
  }

  componentWillMount() {

    var user = JSON.parse(localStorage.getItem('session')).user;

    if (this.props.match.params.id === `${user.id}`) {
      var holdFriends;
      var token = JSON.parse(localStorage.getItem('session')).token
      var options = {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
         Accept: 'application/json',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
         }
        }
      fetch('http://localhost:3000/friends/', options)
      .then(response => response.json())
      .then(jsonFriends => {
        holdFriends = jsonFriends
        fetch('http://localhost:3000/folks/', options)
        .then(response2 => response2.json())
        .then(jsonFolks => {
          this.setState({
            userFriends: holdFriends,
            user: user,
            userFolks: jsonFolks
          })
        })
        .catch(error2 => {
          console.log('Error!..: ',error2);
        });
      })
      .catch(error => {
        console.log('Error!..: ',error);
      });

    } else {
      var options = {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
         Accept: 'application/json',
           'Content-Type': 'application/json',
         }
        }
      fetch('http://localhost:3000/users/profile/2', options)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          user: responseJson
        })
      })
      .catch(error => {
        console.log('Error!..: ',error);
      });
    }

  }


  render () {


    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    const allFriends = this.state.userFriends.map((friend, index) => {
      if(friend.user) {
        friend = friend.user
        return (<NavLink exact to={`/profile/${friend.id}`}>
        <Friend key={friend.id} person={friend.id} image={ friend.image }
        name={`${friend.first_name} ${friend.last_name}`}
        onClick={(e)=>{this.friendProfile(e,index )}}/></NavLink>)
      }

    });

    const allFolks = this.state.userFolks.map(folk => {
      console.log(folk);
      return <Folk key={folk.id} image={ folk.image } />;
    });

    return (
      <div className="container profile-cont">
        <ProfPic name={`${this.state.user.first_name} ${this.state.user.last_name}`}
        image={this.state.user.image}/>
        <div className="row">
          <div className="col-4">
            <div className="profile-info">
              <p>Region: {this.state.user.region} </p>
              <p>Age Group: {this.state.user.age_group}</p>
              <div className="progess">
                <p>Progress: {this.state.user.score}%</p>
                <div className="progress-bar">
                </div>
              </div>
            </div>
            <div className="friends-container">
              <h4 className="friends-title">Friends: </h4>
              <div className="container two-friends">
                {allFriends}
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="show-folks">
              <h4 className="folks-title">Folks: </h4>
              {allFolks}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
