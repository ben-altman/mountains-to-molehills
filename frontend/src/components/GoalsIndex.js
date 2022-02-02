import React from 'react';
import TaskForm from './TaskForm';

function GoalsIndex(props) {
    console.log('goalindex:', props.project.goals)
  return <div>
      {props.goals?.map((goal) => (
        <div key={goal.id} className="card goal"><h3>{goal.description}</h3>
        <ul>{goal.tasks.map(task => (<li key={task.id}>{task.description}</li>))}</ul>
        <TaskForm goal={goal} addTask={props.addTask}/>
        </div>))}
      </div>
}

export default GoalsIndex;
