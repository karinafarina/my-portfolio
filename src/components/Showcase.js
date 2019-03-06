import React, { Component } from 'react';
import Omnifood from "../images/omnifood.png";
import Nexter from "../images/nexter.png";
import Trillo from "../images/trillo.png";
import Astronomy from "../images/astronomy2.png"
//import { Link } from 'react-router';

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <h1 className="title text-center py-3">Featured Work</h1>
        <div className="projects">
          <div className="project project-1">
            <a href="https://karinafarina.github.io/MyNextor/" alt="Nexter">
              <img src={Nexter} alt="Real Estate"/>
            </a>
          </div>
          <div className="project project-2">
            <a href="https://karinafarina.github.io/Omnifood/" className="Omnifood">
              <img src={Omnifood} alt="Omnifood"/>
            </a>
          </div>
          <div className="project project-3">
            <a href="https://karinafarina.github.io/Astronomy-Aleworks/"><img src={Astronomy} alt="Astronomy Aleworks"/></a>
          </div>
          <div className="project project-4">
            <a href="https://karinafarina.github.io/Flexbox/">
              <img src={Trillo} alt="Flexbox project"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
