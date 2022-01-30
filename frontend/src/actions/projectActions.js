export const fetchProjects = () => {
    return (dispatch) => {
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
        .then(formData => dispatch({type: "ADD_PROJECT", payload: formData}))
    }
}

export const getProject = (id) => {
 console.log('HERE', id)
    // debugger;
    return (dispatch) => fetch(`http://localhost:3000/api/v1/projects/${id}`, {method: 'GET'})
        .then(response => response.json())
        .then(project => dispatch({type: "GET_PROJECT", payload: project })       
    );
}

export const deleteProject = (id) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/projects/${id}`, {method: 'DELETE' })
        .then((res) => res.json())
        .then(payload => dispatch({type: 'DELETE_PROJECT', payload}))
    }
}

export const addGoal = (description, projectId) => {
    return (dispatch) => {
        console.log('addgoal', description, projectId)
        return fetch('http://localhost:3000/api/v1/goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: description, project_id: projectId
            })
        })
        .then((res) => res.json())
        // .then(payload => console.log('goal action: ', payload))
        .then(payload => dispatch({type: "ADD_GOAL", payload: payload}))
    }
}

export const addTask = (description, goalId) => {
    return (dispatch) => {
        console.log('addtask', description, goalId)
        return fetch('http://localhost:3000/api/v1/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: description, goal_id: goalId
            })
        })
        .then((res) => res.json())
        .then(payload => console.log('goal action: ', payload))
        // .then(payload => dispatch({type: "ADD_GOAL", payload: payload}))
    }
}