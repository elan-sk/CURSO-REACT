import React from 'react';
import { TodoContext } from '../TodoContext';

function EmptyTodos() {
  const {
    searchValue,
  } = React.useContext(TodoContext);
  return (
    <>
      {searchValue === "" && (
        <p>¡Crea tu primer TODO!</p>
      )}
      {searchValue !== "" && (
        <p>¡No hay ningún resultado!</p>
      )}
    </>
  );
}

export { EmptyTodos };
