import React, { Component } from 'react';
import Resume from '../images/my-resume.pdf';
import DownloadLink from "react-download-link";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="my-brand">Karina Gaulin</div>
        <ul className="nav">
          <li>Home</li>
          <li className="resume">
            <DownloadLink
              filename="my-resume.pdf"
              exportFile={() => "My cached data"}
              label="Resume"
            >
              Save to Disk
            </DownloadLink>
          </li>
          <li><a href="mailto:karinagaulin@gmail.com">Connect</a></li>
        </ul>
      </div>
      );
    }
  }

  export default Header;
