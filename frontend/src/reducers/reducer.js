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

        case "GET_PROJECT":
            // console.log(action)
            return {...state,
            selectedProject: action.payload }

        case "ADD_PROJECT":
            console.log(action.payload)
            return {...state,
                projects: [...state.projects, action.payload ]
            }
            // return Object.assign(projects, action.payload})
            

        default: 
            return state
    }
}

export default reducer