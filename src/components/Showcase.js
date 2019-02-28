import React, { Component } from 'react';
import Astronomy from "../images/astronomy.png";
import Breastfeeding from "../images/breastfeeding.png";
import Nexter from "../images/nexter.png";
import Trillo from "../images/trillo.png";
//import { Link } from 'react-router';

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <h1 className="title text-center py-4">My Work</h1>
        <div className="projects">
          <div className="project project-1">
            <a href="https://karinafarina.github.io/MyNextor/" alt="Nexter">
              <img src={Nexter} alt="Real Estate"/>
            </a>
          </div>
          <div className="project project-2">
            <a href="https://karinafarina.github.io/Breastfeeding-Quiz/" className="breastfeeding">
              <img src={Breastfeeding} alt="Woman breastfeeding"/>
            </a>
          </div>
          <div className="project project-3">
            <img src={Astronomy} alt="Astronomy Aleworks"/>
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
