export const fetchProjects = () => {
    return (dispatch) => {
    // dispatch({ type: 'LOAD_PROJECTS' });
    fetch("http://localhost:3000/api/v1/projects")
    .then(response => response.json())
    .then(data => dispatch({type: "GET_PROJECTS", payload: data })
    );
}
}

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