import ActionType from './ActionType'; 
// import { todo } from '../shared/todoItem'; 
import { baseUrl } from '../shared/baseUrl';

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

export const postTodo = (message) => (dispatch) => {

    const newTodo = {
        message: message,
        completed: false
    };
    newTodo.date = new Date().toISOString();
    
    return fetch(baseUrl + 'todo', {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => dispatch(addTodo(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your Todo Item could not be posted\nError: '+error.message); });
};

export const clearTodo = () => (
    {
        type: ActionType.CLEAR_ALL
    }
)

export const fetchTodo = () => (dispatch) => {
    dispatch(todoLoading(true));
    
    return fetch(baseUrl + 'todo')
        .then(response => {
            if (response.ok) 
                return response
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText ); 
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message); 
            throw errmess;
        })
        .then(response => response.json())
        .then(todo => dispatch(addTodo(todo)) )
        .catch(error => dispatch(todoFailed(error.message)))
}

export const todoLoading = () => ({
    type: ActionType.TODO_LOADING
});

export const todoFailed = (errmess) => ({
    type: ActionType.TODO_FAILED, 
    payload: errmess
});