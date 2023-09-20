// import './TodoCounter.css'

// function TodoCounter({total, completed}) {
//     return (
//         <h1 className="counter">
//             Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOs
//         </h1>
//     );
// }

// export { TodoCounter };


import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    let message = "";

    if (completed === total) {
        message = `¡Felicitaciones por completar todas <strong>(${total})</strong> las tareas!`;
    } else {
        message = `Has completado <strong>${completed}</strong> de <strong>${total}</strong> TODOs`;
    }

    return (
        <h1 className="counter" dangerouslySetInnerHTML={{ __html: message }}></h1>
    );
}

export { TodoCounter };
