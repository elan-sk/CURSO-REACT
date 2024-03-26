import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';



function CreateTodoButton() {
    const {
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <button className="create-todo-button" onClick = {e =>{
            setOpenModal(state => !state);
        }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

