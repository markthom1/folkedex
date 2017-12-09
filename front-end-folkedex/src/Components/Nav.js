import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default props => {
  console.log('nav mount');
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/rank">Rankings</Link></li>
        <li><Link to="/play">Play</Link></li>
      </ul>
    </nav>
  )
}
