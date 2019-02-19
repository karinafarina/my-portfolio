import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <ul className="nav">
            <li>Home</li>
            <li>My Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      );
    }
  }

  export default Header;
