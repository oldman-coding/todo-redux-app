import React, { Component } from 'react';
import {Card, Button} from 'reactstrap';

const TodoItem = (props) => {
    if (!props.item) {
        console.log("No Item Passed"); 
        alert("No item passed");
    }
    else
    return (
        <div>
            <h1>{props.item.message}</h1>
            <h2>{props.item.id}</h2>
        </div>
    )
}

export default TodoItem;
