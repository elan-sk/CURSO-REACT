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


function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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
                    <TodoCounter
                        completed={completedTodos}
                        total={totalTodos}
                    />

                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
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
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };
