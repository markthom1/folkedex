import React, { Component } from 'react';
import './Result.css';
import AddButton from './AddButton';

class Result extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true,
      isFriend: false,
      friendRequested: false,
      incomingReq: false
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser(e) {
    e.preventDefault();

    var token = JSON.parse(localStorage.getItem('session')).token
    if (!(this.state.friendRequested)) {
      var fetchUrl = (this.state.incomingReq)?
      'http://localhost:3000/friends/accept':
      'http://localhost:3000/friends/add';

      var fetchBody = (this.state.incomingReq)?
      JSON.stringify({ requester_id: this.props.userId }):
      JSON.stringify({ requestee_id: this.props.userId });

      var setStateObject = (this.state.incomingReq)?
      {isFriend: true}:
      {friendRequested: true}

      console.log(fetchBody);
      var options = {
        method: 'POST',
        headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         "Access-Control-Allow-Origin": "*",
         'Authorization': `Bearer ${token}`
        },
        body: fetchBody
      }
      fetch(fetchUrl, options)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(setStateObject)
      })
      .catch(error => {
        console.log('Error!..: ',error);
      });
    } else { /*do nothing*/}

  }

  componentWillMount() {
    this.setState({
      isFriend: this.props.isFriend,
      friendRequested: this.props.friendRequested,
      incomingReq: this.props.incomingReq
    })
  }


  render () {

    return (
      <div className="search-result">
        <div><img src={this.props.image} alt=""/></div>
        <div className="result-info">
          <h5>{this.props.name}</h5>
          <h6>Region: {this.props.region}</h6>
        </div>
        {(this.state.isFriend)?"":<div className="hold-btn">
        <AddButton userId={this.props.userId}
        friendRequested={this.state.friendRequested}
        incomingReq={this.state.incomingReq}
        addUser={(e) => {this.addUser(e)}}/> </div>}
      </div>
    )
  }
}

export default Result;
