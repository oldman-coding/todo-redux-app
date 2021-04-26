import  ActionType from './ActionType';



export const TodoList = (state
    , action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case ActionType.ADD_TODO:
            newState.todo.items.push({
                message: action.message, 
                completed: false,
                id: newState.todo.items.length
            }); 
            break;
        case ActionType.COMPLETE_TODO:
            newState.todo.items[action.index].completed = !newState.todo.items[action.index].completed;
            break;
        case ActionType.DELETE_TODO:
            newState.todo.items.splice(action.index,1);
            break;
        case ActionType.CLEAR_ALL:
            newState.todo.items = [];
            break;
        default:
            break;
    }
    return newState;
}