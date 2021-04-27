import ActionType from './ActionType'; 

export const Todos = (state = {
        isLoading: true, 
        errMess: null, 
        todo: [],
    }, action) => {
        var newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        
        case ActionType.ADD_TODO: 
            return {...state, isLoading: false, errMess: null, todo: state.todo.concat(action.payload)}
        case ActionType.TODO_LOADING: 
            return {...state, isLoading: true, errMess: null, todo: []}

        case ActionType.TODO_FAILED: 
            return {...state, isLoading: false, errMess: action.payload, todo: []}

        case ActionType.COMPLETE_TODO:
            newState.todo[action.index].completed = !newState.todo[action.index].completed;
            return newState;
        case ActionType.DELETE_TODO:
            newState.todo.splice(action.index,1);
            return newState;
        case ActionType.CLEAR_ALL:
            newState.todo = [];
            return newState;
        default: 
            return state;
    }
}

	