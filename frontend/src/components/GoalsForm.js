// import React from 'react';
import React, { Component } from 'react';

class GoalsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         goal: ''
      }
    }

    handleChange = (event) => {
        this.setState({
            goal: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const projectId = this.props.selectedProject.id;
        this.props.addGoal(this.state.goal, projectId);
        event.target.reset();
        // Why didnt below work?
        // this.setState({ project: '' })
      }
    

  render() {
// debugger;
    return <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label><b>Add a Goal: </b>
            <input type='text' onChange={ (event) => this.handleChange(event)} />
            <input type='submit' value='Add' />
        </label>
    </form>;
  }
}

export default GoalsForm;
