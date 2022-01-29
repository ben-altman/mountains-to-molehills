// import React from 'react';
import React, { Component } from 'react';

class ProjectsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         project: ''
      }
    }

    handleChange = event => {
        this.setState({
            project: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addProject(this.state.project);
        event.target.reset();
        // Why didnt below work?
        // this.setState({ project: '' })
      }
    

  render() {
    return <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label><b>Add a Project: </b>
            <input type='text' onChange={ (event) => this.handleChange(event)} />
            <input type='submit' value='Create Project' />
        </label>
    </form>;
  }
}

export default ProjectsForm;
