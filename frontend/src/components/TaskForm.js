import React, { Component } from 'react';

export class TaskForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            task: ''}
    }
    handleChange = event => {
        this.setState({
            task: event.target.value
        })
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const goalId = this.props.goal.id;
        this.props.addTask(this.state.task, goalId);
        event.target.reset();
    }
    
  render() {
    return <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type='text' placeholder='new task' onChange={ (event) => this.handleChange(event)} />
            <input type='submit' value='Add' />
        </form>
    </div>;
  }
}

export default TaskForm;
