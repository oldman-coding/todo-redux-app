import ActionType from './ActionType'; 
import { todo } from '../shared/todoItem'; 

export const completeTodo = (index) => (
    {
        type: ActionType.COMPLETE_TODO, 
        index: index
    }
)

export const deleteTodo = (index) => ({
    type: ActionType.DELETE_TODO, 
    index: index
})

export const addTodo = (todo) => (
    {
        type: ActionType.ADD_TODO, 
        payload: todo
    })

export const clearTodo = () => (
    {
        type: ActionType.CLEAR_ALL
    }
)

export const fetchTodo = () => (dispatch) => {
    dispatch(todoLoading(true));
    
    setTimeout(() => {
        dispatch(addTodo(todo));
        
    },2000);
    console.log('Our data is fetched')
}

export const todoLoading = () => ({
    type: ActionType.TODO_LOADING
});

export const todoFailed = (errmess) => ({
    type: ActionType.TODO_FAILED, 
    payload: errmess
});