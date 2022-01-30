import React, { Component } from 'react';
import TaskForm from './TaskForm';

class ProjectShow extends Component {
  
  renderGoals = () => {
    // debugger
    return this.props.selectedProject.goals?.map((goal) => (
    <div key={goal.id} className="card goal"><h3>{goal.description}</h3>
      <ul>{goal.tasks.map(task => (<li key={task.id}><span>{task.description}</span></li>))}</ul>
      <TaskForm goal={goal} />
    </div>))
  }

  render() {
    // debugger;
    const project = this.props.selectedProject
    console.log("projectshow", project)
  return <div className="center-card">
      <h2>{project.title}</h2>
      <div>
        {this.renderGoals()}
      </div>
  </div>;
  }
}

export default ProjectShow;