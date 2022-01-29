const reducer = (state = {
    projects: [],
    selectedProject: {
        // title: "",
        // goals: [],
        // logs: []
    },
    logs: []
}, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return {...state, 
            projects: action.payload }

        case "GET_RESTAURANT":
            debugger;
            return {...state,
            selectedProject: action.payload }

        case "ADD_PROJECT":
debugger;
            return {...state,
                projects: {...state.projects}
            }

        default: 
            return state
    }
}

export default reducer