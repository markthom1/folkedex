import React, { Component } from 'react';
import './Rank.css';

class Rank extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    return (
      <div className="container">
        <nav className="rankNav">
          <ul>
            <li className="rank-selector select-friends"><a href="#">Friends</a></li>
            <li className="rank-selector select-region"><a href="#">Region</a></li>
            <li className="rank-selector select-world"><a href="#">World</a></li>
          </ul>
        </nav>
        <div className="rank-table">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div>

      </div>
    )
  }
}

export default Rank;
