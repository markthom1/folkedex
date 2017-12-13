import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }

  }




  render () {


    return (
      <footer className="footer-container">

        <span className="title">Folkedex</span> <i class="fa fa-copyright" aria-hidden="true"></i>
        <span>2017</span>
      </footer>
    )
  }
}

export default Footer;
