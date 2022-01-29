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
        .then(formData => dispatch({
            type: 'ADD_PROJECT', payload: formData
        }))
    }
}

export const getProject = (id) => {
 
    return (dispatch) => fetch(`http://localhost:3000/api/v1/projects/${id}`)
        .then(response => response.json())
        .then(project => dispatch({type: "GET_PROJECT", payload: project })       
    );
}

// .then(project => dispatch({type: "GET_PROJECT", payload: project })

// return (dispatch) => {
//     dispatch({ type: 'LOAD_PROJECTS' });
//     fetch("http://localhost:3000/api/v1/projects")
//     .then(response => response.json())
//     .then(data => dispatch({type: "GET_PROJECTS", payload: data })
//     );
// }

// return dispatch({ type: 'LOAD_PROJECTS' }) => fetch("http://localhost:3000/api/v1/projects")
//     .then(response => response.json())
//     .then(data => dispatch({type: "GET_PROJECTS", payload: data })
//     );