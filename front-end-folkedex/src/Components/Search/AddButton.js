import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true,
    }

  }

  componentWillMount() {

  }


  render () {
    var buttonOptions =(this.props.incomingReq)?"Accept":"Send Request"

    return (
      <div className="btn" onClick={(e)=>{this.props.addUser(e)}}>
        {(this.props.friendRequested)?"Friend Requested":buttonOptions}
      </div>
    )
  }
}

export default AddButton;
