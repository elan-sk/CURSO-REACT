import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';



function CreateTodoButton() {
    const {
        setOpenModal,
        setTodoEdit,
    } = React.useContext(TodoContext);
    return (
        <button className="create-todo-button" onClick = {e =>{
            setOpenModal(state => !state);
            setTodoEdit(null);
        }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

