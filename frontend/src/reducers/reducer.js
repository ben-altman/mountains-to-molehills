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

        case "GET_PROJECT":
            return {...state,
                selectedProject: action.payload}
        

        case "ADD_PROJECT":
            return {...state,
                projects: [...state.projects, action.payload ]
            }

        case "DELETE_PROJECT":
            return {...state,
            projects: action.payload
            }

        case "ADD_GOAL":
            const newGoal = {description: action.payload.description, id: action.payload.id, tasks: []}
            return {...state,
                selectedProject: {
                    ...state.selectedProject,
                    goals: [
                        ...state.selectedProject.goals.concat(newGoal)
                    ]
                }               
            }
        
        case "ADD_TASK":
            console.log("payload: ", action.payload)
            const newTask = {description: action.payload.description, id: action.payload.id}
            const thisGoal = state.selectedProject.goals.find(goal => goal.id === action.payload.goal.id)
            return {...state,
                selectedProject: {
                    ...state.selectedProject,
                        goals: state.selectedProject.goals.map(goal => {
                            if(goal.id !== thisGoal.id) {
                                return goal 
                            } else {
                            return {
                                ...goal,
                                tasks: goal.tasks.concat(newTask)
                            }}
                        })                            
                }
            }

        default: 
            return state
    }
}

export default reducer