const reducer = (state = {
    projects: [],
    selectedProject: {},
    logs: [],
    requesting: false
}, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return {...state, 
            projects: action.payload }

        // case 'START_ADDING_PROJECT':
        //     debugger;
        //     return {
        //         ...state,
        //         selectedProject: {},
        //         requesting: true,
        //     }

        case "GET_PROJECT":
            // debugger;
            // debugger;
            // console.log(state.projects.find(project => project.id === action.id))
            // const project = state.projects.find(project => project.id === action.id);
            // return {...state,
            // selectedProject: project}

            // const project = state.projects.find(project => project.id === action.id);
            // return {...state,
            // selectedProject: project }
            return {...state,
                selectedProject: action.payload}
        

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