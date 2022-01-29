const reducer = (state = {
    projects: [],
    goals: [],
    tasks: [],
    logs: []
}, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            // debugger;
            return {...state, 
            projects: action.payload }
        
        default: 
            return state
    }
}

export default reducer