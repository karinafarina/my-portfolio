import React, { Component } from 'react';

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <h1 className="title text-center pt-4">My Work</h1>
        <div className="projects container">
          <div className="project project-1">Project 1</div>
          <div className="project project-2">Project 2</div>
          <div className="project project-3">Project 3</div>
        </div>
      </div>
    );
  }

}

export default Showcase;
