const reducer = (state = {
    projects: [],
    goals: [],
    tasks: [],
    logs: []
}, action) => {
    switch (action.type) {
        case "LOAD_PROJECTS":
            return {
                ...state,
                projects: [...state.projects],
            };

        case "GET_PROJECTS":
            // debugger;
            return {...state, 
            projects: action.payload }
        
        default: 
            return state
    }
}

export default reducer