import React from 'react';
import { TodoContext } from '../TodoContext';
import { DeleteIconAll } from '../TodoIcon/DeleteIconAll';
import { ResetIconAll } from '../TodoIcon/ResetIconAll';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(false);

  let message = '';

  React.useEffect(() => {
    if (completedTodos === totalTodos && totalTodos > 0) {
      setShowConfetti(true);
      const timeout = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timeout);
    }

    return setShowConfetti(false);
  }, [completedTodos, totalTodos]);

  if (completedTodos === totalTodos && totalTodos > 0) {
    message = `¡Felicitaciones por completar todas <strong>(${totalTodos})</strong> las tareas!`;
  } else if (totalTodos === 0) {
    message = `¡No existe ninguna tarea!`;
  } else {
    message = `Has completado <strong>${completedTodos}</strong> de <strong>${totalTodos}</strong> tareas`;
  }

  return (
    <div className='d-flex align-items-center justify-content-center mb-2 position-relative'>
      {showConfetti && <Confetti width={width} height={height} />}
      <h1
        className="counter m-0 mr-2"
        dangerouslySetInnerHTML={{ __html: message }}
      />
      <DeleteIconAll />
      <ResetIconAll />
    </div>
  );
}

export { TodoCounter };
