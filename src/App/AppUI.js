import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { LoadingCounter } from '../TodosLoading/LoadingCounter';
import { LoadingItem } from '../TodosLoading/LoadingItem';
import { LoadingSearch } from '../TodosLoading/LoadingSearch';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import { Logo } from '../Logo';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    openModal,
    reorderTodosByDrag,
    setOpenModal,
    setTodoEdit,
  } = React.useContext(TodoContext);

  // Manejo del reordenamiento
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(searchedTodos);
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);

    if(!searchValue){
        const newOrderKeys = reordered.map(todo => todo.key);
        reorderTodosByDrag(newOrderKeys);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
          setOpenModal(true);
          setTodoEdit(null);
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loading]);

  return (
    <>
      {loading && (
        <>
          <LoadingCounter />
          <LoadingSearch />
        </>
      )}
      {!loading && (
        <>
          <TodoCounter />
          <TodoSearch />
        </>
      )}
      {!loading && searchedTodos.length !== 0 && (
        <div className="text-center pb-2">
          <span>Doble click para editar</span>
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList>
          {loading && (
            <>
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
              <LoadingItem />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          {!loading &&
            searchedTodos.slice().map((todo, index) => (
              <TodoItem
                key={todo.key}
                keyId={todo.key}
                id={todo.key}
                text={todo.text}
                completed={todo.completed}
                index={index}
                onComplete={() => completeTodo({ key: todo.key, completedState: true })}
                onWorking={() => completeTodo({ key: todo.key, completedState: false })}
                onDelete={() => deleteTodo(todo.key)}
              />
            ))}
        </TodoList>
      </DragDropContext>

      <Logo src="./logo-elan-sk.svg" />
      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
