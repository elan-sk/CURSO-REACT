import React from 'react';
import { TodoContext } from '../TodoContext';
import { DeleteIconAll } from '../TodoIcon/DeleteIconAll'
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
        message = `Has completado <strong>${completedTodos}</strong> de <strong>${totalTodos}</strong> tareas`;
    }

    if (totalTodos === 0){
        message = `¡No existe ninguna tarea!`;
    }

    return (
        <div className='d-flex align-items-center justify-content-center mb-2'>
            <h1 className="counter m-0 mr-2" dangerouslySetInnerHTML={{ __html: message }}/>
            <DeleteIconAll/>
        </div>
    );
}

export { TodoCounter };
