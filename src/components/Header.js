import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="my-brand">Karina Gaulin</div>
        <ul className="nav">
          <li><a href="#" className="home"></a>Home</li>
          <li><a href="mailto:karinagaulin@gmail.com">Connect</a></li>
        </ul>
      </div>
      );
    }
  }

  export default Header;
