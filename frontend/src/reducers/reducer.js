const reducer = (state = {
    projects: [],
    selectedProject: {},
    logs: []
}, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return {...state, 
            projects: action.payload }

        case "GET_PROJECT":
            console.log(action)
            return {...state,
            selectedProject: action.payload }

        case "ADD_PROJECT":
            console.log(action.payload)
            return {...state,
                projects: [...state.projects, action.payload ]
            }

        case "DELETE_PROJECT":
            console.log("action is:", action.payload, state)
            // const projects = state.projects.filter(project => project.id !==action.id);
            return {...state,
            projects: action.payload
                // ...state.projects.slice(0, action.payload),
                // ...state.projects.slice(action.payload + 1)
            }

        default: 
            return state
    }
}

export default reducer