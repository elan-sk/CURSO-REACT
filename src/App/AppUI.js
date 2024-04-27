import React from 'react';
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


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        upPriorityTodo,
        downPriorityTodo,
        openModal,
    } = React.useContext(TodoContext);

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
                {!loading && searchedTodos.length !== 0 &&(
                    <div className='text-center pb-2'>
                        <span >Doble click para editar</span>
                    </div>
                )}
                {!loading && (
                    searchedTodos
                    .slice()
                    .sort((a, b) => b.priority - a.priority)
                    .map(todo => (
                        <TodoItem
                            key={todo.key}
                            keyId={todo.key}
                            priority={todo.priority}
                            id={'Item-' + todo.key}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.key)}
                            onDelete={() => deleteTodo(todo.key)}
                            upPriority={() => upPriorityTodo(todo.key)}
                            downPriority={() => downPriorityTodo(todo.key)}
                        />
                    ))
                )}
            </TodoList>
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
