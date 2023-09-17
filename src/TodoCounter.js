import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <h1 className="counter">
            Has completado <br/> <strong>{completed}</strong> de  <strong>{total}</strong> TODOs
        </h1>
    );
}

export { TodoCounter };

