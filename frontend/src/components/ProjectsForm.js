import React from 'react';

const ProjectsForm = (props) => {
    
    // handleInput = event => {
    //     {console.log(event)}
    // }

    return (
        <form handleInput={event=> props.addProject(event.target.value)}>
            <label><b>Add a Project: </b>
                <input type='text' name='title' />
                <input type='submit' value='Create Project' />
            </label>
        </form>
    )
}

export default ProjectsForm;
