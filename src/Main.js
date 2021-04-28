import React, {Component} from 'react';
import Header from './components/HeaderComponent'; 
import AddTodo from './components/AddTodoComponent'; 
import TodoItems from './components/TodoItemComponent'; 
import { Loading } from './components/LoadingComponent';
import { deleteTodo, completeTodo, clearTodo, fetchTodo, postTodo } from './redux/ActionCreators';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      items: state.todo,
      isLoading: state.isLoading, 
      errMess: state.errMess
    }
}

const mapDispatchToProps = (dispatch) => ({
    postTodo: (message) => dispatch(postTodo(message)), 
    clearTodo: () => dispatch(clearTodo()), 
    completeTodo: (index) => dispatch(completeTodo(index)), 
    deleteTodo: (index) => dispatch(deleteTodo(index)), 
    fetchTodo: () => {dispatch(fetchTodo())}
});


class Main extends Component {
  constructor(props) {
      super(props);
      
  }

  componentDidMount() {
    this.props.fetchTodo(); 

  }
  
  render() {
    
    if (this.props.isLoading) {
      return (
        <div className='container'>
            <div className='row'>
              <Loading />
            </div>
        </div>
      )
    }
    else if (this.props.errMess) {
      return (
        <div className='container'>
            <div className='row'>
              <h4>{this.props.errMess}</h4>
            </div>
        </div>
      )
    }
    else 
      return (
      <div className="App">
          {/* <Loading /> */}
          <Header />
          <AddTodo postTodo={this.props.postTodo}
                  clearTodo ={this.props.clearTodo}
          />
          <TodoItems 
            items={this.props.items} 
            completeTodo={this.props.completeTodo}
            deleteTodo={this.props.deleteTodo}
            />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
