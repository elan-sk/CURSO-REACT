import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';



function CreateTodoButton() {
    const {
        setOpenModal,
        setTodoEdit,
        todosLength,
        loading,
    } = React.useContext(TodoContext);

    return (
        <button className={(!todosLength() &&  !loading) ? "create-todo-button spotlight" : "create-todo-button"} onClick = {e =>{
            setOpenModal(state => !state);
            setTodoEdit(null);
        }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

