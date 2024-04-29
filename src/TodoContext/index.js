import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { animateMultiples } from '../Animation';
import { animateElement } from '../Animation';
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

    const moveTodo = (key, values) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)
        itemFound.text = values?.text;
        itemFound.priority = values?.priority;
        saveTodos(newTodos);
    };

    const setTodo = (key, values) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)
        itemFound.text = values?.text;
        itemFound.priority = values?.priority;
        saveTodos(newTodos);
    };

    const getTodo = (key) => {
        const newTodos = [...todos];
        let itemFound= newTodos.find(item => item.key === key)
        return itemFound;
    };

    const addTodo = (values) => {
        const newTodos = [...todos];
        let indexLastTodo = newTodos.length - 1;
        let newKey = indexLastTodo >= 0 ? newTodos[indexLastTodo].key + 1 : 1;
        newTodos.push({
            key: newKey,
            text: values?.text || null,
            completed: false,
            priority: newTodos.length + 1,
        })

        animateElement(
            'Item-'+newKey,
            'palpite-in',
            500,
            saveTodos.bind(null, newTodos)
        )
    };

    const reorderPriorities = (initialPriority, newTodos) => {
        if(newTodos.length === 0) return newTodos
        const lastPriority =  newTodos.length + 1;
        for (let index = initialPriority+1 ; index <= lastPriority; index++) {
            let itemFound= newTodos.find(item => item.priority === index)
            itemFound.priority = index - 1
        }
        return newTodos
    }

    const completeTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.key === key);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (key) => {
        let newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.key === key);
        const priority = newTodos[todoIndex].priority
        newTodos.splice(todoIndex, 1)
        const newTodosReorder = reorderPriorities(priority, newTodos)

        animateExit(
            'Item-'+key,
            'palpite-out',
            600,
            saveTodos.bind(null, newTodosReorder)
        )
    };

    const deleteAll = () => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar todas las tareas?');

        if (confirmDelete) {
            const animationTodos = [...todos];
            const ids = animationTodos.map(
                todo => 'Item-' + todo.key
            );

            animateElements(ids, 'palpite-out', 600)
            saveTodos([])
        }
    };

    const upPriorityTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.key === key);
        const currentTodo = newTodos[todoIndex];
        const currentPriority = currentTodo.priority;

        if(newTodos.length <= 1 || newTodos.length <= currentPriority) return
        const nextTodo= newTodos.find(item => item.priority === currentPriority + 1)
        const nextPriority = nextTodo.priority
        currentTodo.priority = nextPriority
        nextTodo.priority = currentPriority

        animateMultiples(
            ['Item-'+ currentTodo.key, 'Item-'+ nextTodo.key],
            ['move-up','move-down']
        );
        saveTodos(newTodos);
    };

    const downPriorityTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.key === key);
        const currentTodo = newTodos[todoIndex];
        const currentPriority = currentTodo.priority;

        if(newTodos.length <= 1 || currentPriority <= 1) return
        const previousTodo= newTodos.find(item => item.priority === currentPriority - 1)
        const previousPriority = previousTodo.priority
        currentTodo.priority = previousPriority
        previousTodo.priority = currentPriority

        animateMultiples(
            ['Item-'+ currentTodo.key, 'Item-'+ previousTodo.key],
            ['move-down','move-up']
        );
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            moveTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            upPriorityTodo,
            downPriorityTodo,
            openModal,
            setOpenModal,
            todoEdit,
            setTodoEdit,
            addTodo,
            getTodo,
            setTodo,
            deleteAll,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };


