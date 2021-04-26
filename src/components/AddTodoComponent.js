import React, { Component } from 'react';
import ActionType from '../redux/ActionType';
import {ConfigureStore} from '../app/store';

var store = ConfigureStore();



class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearAllButton = this.clearAllButton.bind(this);
        this.state = {
            message: ''
        }
    }
    
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("Current state is" + JSON.stringify(this.state))
        alert("Current state is" + JSON.stringify(this.state));
        event.preventDefault();
        var message = this.state.message;
        if (message) {
            this.props.addTodo(message)
        }
        this.setState({
            message: ''
          });
    }

    clearAllButton(event) {
        event.preventDefault();
        this.props.clearTodo();
        console.log("store: ", store.getState().todo.items);
    }
    

    render() {
        


        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input type='text' placeholder='New task' name ='message'
                        value={this.state.message} onChange = {this.handleInputChange} />
                    <input type="submit"  value="Add" />
                    <input type='button' onClick ={this.clearAllButton} value='Clear All' />
                </form>
                <h2>Please add Task todo</h2>
            </div>
        )
    }
}
export default AddTodo;