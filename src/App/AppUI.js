import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
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
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.key}
                        id={'Item-' + todo.key}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.key)}
                        onDelete={() => deleteTodo(todo.key)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export { AppUI };
