import React, { useState } from 'react';
import '../css/Todo.css';
import TodoList from '../components/TodoList';

export const Todo = () => {

    return (
        <div className="todo-app">
            <TodoList/>
        </div>
    )
}

export default Todo