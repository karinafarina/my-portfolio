import React, { Component } from 'react';
import Astronomy from "../images/astronomy.png";
import Breastfeeding from "../images/breastfeeding.png";
//import { Link } from 'react-dom'

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <h1 className="title text-center py-4">My Work</h1>
        <div className="projects container">
          <div className="project project-1">Project 1</div>
          <div className="project project-2">
            <a href="https://karinafarina.github.io/Breastfeeding-Quiz/" className="breastfeeding"><img src={Breastfeeding} alt="Woman breastfeeding"/></a>
          </div>
          <div className="project project-3">
            <img src={Astronomy} alt="Astronomy Aleworks"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
