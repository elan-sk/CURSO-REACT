import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';



function CreateTodoButton() {
    const {
        setOpenModal,
        setModeEdit,
    } = React.useContext(TodoContext);
    return (
        <button className="create-todo-button" onClick = {e =>{
            setOpenModal(state => !state);
            setModeEdit(null);
        }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

