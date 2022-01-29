import React from 'react';

const ProjectsForm = (props) => {
    const handleInput = event => {
        {console.log(event)}
    }

    return (
        <form handleInput={props.addProject}>
        <label>Add a Project: 
            <input type='text' name='title' />
            <input type='submit' value='Create Project' />
        </label>
        </form>
    )
}

export default ProjectsForm;
