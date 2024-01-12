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
import { TodoContext } from '../TodoContext';


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
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
                    </>
                )}
                {error && <TodosError />}
                {!loading && searchedTodos.length === 0 && <EmptyTodos />}
                {!loading && (
                    searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.key}
                            id={'Item-' + todo.key}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.key)}
                            onDelete={() => deleteTodo(todo.key)}
                        />
                    ))
                )}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}


export { AppUI };
