import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';



function CreateTodoButton() {
    const {
        setOpenModal,
        setTodoEdit,
        todosLength,
    } = React.useContext(TodoContext);

    return (
        <button className={todosLength() ? "create-todo-button fade-in" : "create-todo-button spotlight"} onClick = {e =>{
            console.log(todosLength());
            setOpenModal(state => !state);
            setTodoEdit(null);
        }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

