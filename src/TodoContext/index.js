import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { animateElements } from '../Animation';
import { animateExit } from '../Animation';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [todoEdit, setTodoEdit] = React.useState(null);

    const reorderTodosByDrag = (newOrderKeys) => {
        const newTodos = newOrderKeys.map((key) => {
            const todo = todos.find(t => t.key === key);
            return { ...todo};
        });
        saveTodos(newTodos);
    };

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

    const setTodo = (key, values) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)
        itemFound.text = values?.text;
        saveTodos(newTodos);
    };

    const getTodo = (key) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)
        return itemFound;
    };

    const addTodo = (values) => {
        const newTodos = [...todos];
        const newKey = Date.now() + Math.floor(Math.random() * 1000);
        newTodos.push({
            key: newKey,
            text: values?.text || null,
            completed: null,
        })

        saveTodos(newTodos)
    };

    const completeTodo = ({key, completedState}) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.key === key);
        const todo = newTodos[todoIndex]
        todo.completed = todo.completed === completedState ? null : completedState

        saveTodos(newTodos);
    };

    const deleteTodo = (key) => {
        let newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.key === key);
        newTodos.splice(todoIndex, 1)

        animateExit(
            key,
            'palpite-out',
            600,
            saveTodos.bind(null, newTodos)
        )
    };

    const deleteAll = () => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar todas las tareas?');

        if (confirmDelete) {
            const animationTodos = [...todos];
            const ids = animationTodos.map(
                todo => todo.key
            );

            saveTodos([], animateElements.bind(null, ids, 'palpite-out', 600), 600)
        }
    };

    const resetAll = () => {
        let newTodos = [...todos];
        newTodos.forEach(todo => {
            if(todo.completed !== null){
                todo.completed = null
            }
        })
        saveTodos(newTodos)
    };

    const todosLength= () => {
        return todos.length
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            reorderTodosByDrag,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            todoEdit,
            setTodoEdit,
            addTodo,
            getTodo,
            setTodo,
            deleteAll,
            resetAll,
            todosLength,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };


