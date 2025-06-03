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

    const handleOpenNewTodo = () => {
        setOpenModal(true);
        setTodoEdit(null);
    };

    return (
        <button
            className={(!todosLength() &&  !loading) ? "create-todo-button spotlight" : "create-todo-button"}
            onClick = {handleOpenNewTodo}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

