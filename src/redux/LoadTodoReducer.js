import ActionType from './ActionType'; 

export const Todos = (state = {
        isLoading: true, 
        errMess: null, 
        todo: []
    }, action) => {
    switch(action.type) {
        case ActionType.ADD_TODO: 
            return {...state, isLoading: false, errMess: null, dishes: action.payload}
        case ActionType.TODO_LOADING: 
            return {...state, isLoading: true, errMess: null, todo: []}

        case ActionType.TODO_FAILED: 
            return {...state, isLoading: false, errMess: action.payload, todo: []}
        default: 
            return state;
    }
}

	