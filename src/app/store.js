import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TodoList } from '../redux/TodoReducer'; 
import { Todos } from '../redux/LoadTodoReducer';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';

// var defaultState = {
//   todo: {
//     items: []
//   }
// };

export const ConfigureStore = () => {
    const store = createStore(
        Todos,
        applyMiddleware(thunk, logger)
    )
    return store;
}


