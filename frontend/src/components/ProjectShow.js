import React, { Component } from 'react';

class ProjectShow extends Component {

  render() {
    const project = this.props.selectedProject
  return <div className="center-card">
      <h2>{project.title}</h2>
  </div>;
  }
}

export default ProjectShow;