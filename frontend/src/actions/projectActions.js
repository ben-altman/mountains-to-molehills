export const fetchProjects = () => {
    return (dispatch) => {
    // dispatch({ type: 'LOAD_PROJECTS' });
        fetch("http://localhost:3000/api/v1/projects")
        .then(response => response.json())
        .then(data => dispatch({type: "GET_PROJECTS", payload: data })
        );
    }
}

export const addProject = (title) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title,
            })
        })
        .then((res) => res.json())
        // .then(formData => console.log(formData))
        .then(formData => dispatch({type: "ADD_PROJECT", payload: formData}))
    }
}

export const getProject = (id) => {
 console.log('HERE', id)
    
    return (dispatch) => fetch(`http://localhost:3000/api/v1/projects/${id}`, {method: 'GET'})
        .then(response => response.json())
        // .then( resp => console.log("actions", resp))
        .then(project => dispatch({type: "GET_PROJECT", payload: project })       
    );
    // return {type: 'GET_PROJECT', id}
}

export const deleteProject = (id) => {
    // return {type: 'DELETE_PROJECT', id}

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/projects/${id}`, {method: 'DELETE' })
        .then((res) => res.json())
        // .then(res => console.log("from action", res))
        .then(payload => dispatch({type: 'DELETE_PROJECT', payload}))
        
        // .then((id) => dispatch({type: "DELETE_PROJECT", payload: id}))
    }
}
