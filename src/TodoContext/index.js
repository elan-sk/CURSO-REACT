import React from "react";
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

const defaultTodos = [
    { key: 1, text: 'Tarea 1', completed: true },
    { key: 2, text: 'Tarea 2', completed: false },
    { key: 3, text: 'Tarea 3', completed: false },
]


function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', defaultTodos);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [modeEdit, setModeEdit] = React.useState(null);

    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        todo => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        }
    );


    const setTodo = (key, textModified) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)
        itemFound.text = textModified;
        saveTodos(newTodos);
    };

    const getTodo = (key) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)

        return itemFound;
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        let indexLastTodo = newTodos.length - 1;
        let newKey = indexLastTodo >= 0 ? newTodos[indexLastTodo].key + 1 : 1;
        newTodos.push({
            key: newKey,
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };


    const completeTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.key === key
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.key === key
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            modeEdit,
            setModeEdit,
            addTodo,
            getTodo,
            setTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };


