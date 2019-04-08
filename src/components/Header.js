import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class Header extends Component {


  blockBodyScroll = () => {
    document.body.classList.add('block-body-scroll');

  }

  allowBodyScroll = () => {
    document.body.classList.remove('block-body-scroll');
  }


  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect fixed="top" className="my-navbar" variant="dark" expand="lg">
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
