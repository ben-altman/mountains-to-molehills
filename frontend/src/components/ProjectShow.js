import React, { Component } from 'react';

export class ProjectShow extends Component {
  
  renderGoals = () => {
    return this.props.project.goals.map((goal) => (
    <div key={goal.id} className="card goal"><h3>{goal.description}</h3>
      <ul>{goal.tasks.map(task => (<li key={task.id}><span>{task.description}</span></li>))}</ul>
    </div>))
  }

  render() {
    const project = this.props.project
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