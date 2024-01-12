import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const{
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    let message = "";

    if (completedTodos === totalTodos) {
        message = `¡Felicitaciones por completar todas <strong>(${totalTodos})</strong> las tareas!`;
    } else{
        message = `Has completado <strong>${completedTodos}</strong> de <strong>${totalTodos}</strong> TODOs`;
    }

    if (totalTodos === 0){
        message = `¡No existe ninguna tarea!`;
    }

    return (
        <h1 className="counter" dangerouslySetInnerHTML={{ __html: message }}></h1>
    );
}

export { TodoCounter };
