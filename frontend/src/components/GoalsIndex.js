import React from 'react';
import TaskForm from './TaskForm';

function GoalsIndex(props) {
    
  return <div>
      {props.project.goals?.map((goal) => (
    <div key={goal.id} className="card goal"><h3>{goal.description}</h3>
      <ul>{goal.tasks.map(task => (<li key={task.id}><span>{task.description}</span></li>))}</ul>
      <TaskForm goal={goal} addTask={props.addTask}/>
    </div>))}
    {console.log("goalindex", props.project.goals)}
      </div>
}

export default GoalsIndex;
