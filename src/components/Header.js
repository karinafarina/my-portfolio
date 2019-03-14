import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class Header extends Component {
  app = null;
  menu = null;

componentDidMount() {
  this.app = document.querySelector('.App');
  this.menu = document.querySelector('.menu');
}

showTargetElement = () => {
  if(this.menu) {
    disableBodyScroll(this.app);
  }
}

  render() {
    return (
      <div className="header">
        <Navbar className="my-navbar" variant="dark" expand="lg">
          <Navbar.Brand className="my-brand" href="#home">Karina Gaulin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="dropdown" id="basic-navbar-nav">
            <Nav className="mr-auto menu">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="https://www.resume.com/share/karinagaulin" download>Resume</Nav.Link>
              <Nav.Link href="mailto:karinagaulin@gmail.com">Connect</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      );
    }
  }

  export default Header;
