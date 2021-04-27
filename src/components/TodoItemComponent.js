import React, { Component } from 'react'; 

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.completedEvent = this.completedEvent.bind(this); 
    }

    
    deleteEvent(index, event) {
        console.log('Delete Id ' + index); 
        event.preventDefault();
        if (index >= 0) {
            this.props.deleteTodo(index); 
        }
    }

    completedEvent(index, event) {
        
        event.preventDefault();
        if ((event.target.checked) && (event.target.type ==='checkbox')) {
            this.props.completeTodo(index);
            console.log('Completed id: ' + index);
        }
    }
    
    render () {
        const todoItem = this.props.items.map((todoItem, item) => {
            return (
                <li className='list-unstyled d-flex justify-content-start mt-2' key={item}>
                    <ul className='checkbox'>
                        <input className="form-check-input" type="checkbox" 
                            value="" 
                            onClick ={(event) => this.completedEvent(item, event)}
                        />
                        <label className="form-check-label" htmlFor={item}
                            style={{textDecoration: todoItem.completed? 'line-through': 'none'}}>
                            {todoItem.message}
                        </label>
                        <a href='#' style={{textDecoration: 'none'}}
                            onClick={(event) => this.deleteEvent(item, event)}
                            > [x]
                            </a>
                    </ul>    
                </li>
            )
        })
        return (
            <div>
                {todoItem}
            </div>
        )

    }
}
export default TodoItems;