import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    let message = "";

    if (completed === total) {
        message = `¡Felicitaciones por completar todas <strong>(${total})</strong> las tareas!`;
    } else{
        message = `Has completado <strong>${completed}</strong> de <strong>${total}</strong> TODOs`;
    }

    if (total === 0){
        message = `¡No existe ninguna tarea!`;
    }

    return (
        <h1 className="counter" dangerouslySetInnerHTML={{ __html: message }}></h1>
    );
}

export { TodoCounter };
