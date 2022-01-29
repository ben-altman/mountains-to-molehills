// import React from 'react';
import React, { Component } from 'react';

export class ProjectsForm extends Component {
    state = {
        project: ''
    }

    handleChange = event => {
        this.setState({
            project: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log("Project being added: ", this.state.project);
        this.props.addProject(this.state);
        this.setState({ project: '' }) 
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
