// import React from 'react';
import React, { Component } from 'react';

class GoalsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         goal: ''
      }
    }

    handleChange = event => {
        this.setState({
            project: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addGoal(this.state.goal);
        event.target.reset();
        // Why didnt below work?
        // this.setState({ project: '' })
      }
    

  render() {
    return <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label><b>Add a Goal: </b>
            <input type='text' onChange={ (event) => this.handleChange(event)} />
            <input type='submit' value='Add' />
        </label>
    </form>;
  }
}

export default GoalsForm;
