import React, { Component } from 'react';
import TaskForm from './TaskForm';
import GoalsIndex from './GoalsIndex';

class ProjectShow extends Component {

  render() {
    const project = this.props.selectedProject
    console.log("projectshow", project)
  return <div className="center-card">
      <h2>{project.title}</h2>
      <GoalsIndex project={this.props.selectedProject} addTask={this.props.addTask}/>
  </div>;
  }
}

export default ProjectShow;