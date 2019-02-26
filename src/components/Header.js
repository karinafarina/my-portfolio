import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="my-brand">Portfolio</div>
        <ul className="nav">
          <li>Home</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </div>
      );
    }
  }

  export default Header;
