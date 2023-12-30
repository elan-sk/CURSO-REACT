import React from 'react';

import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


const defaultTodos = [
  { key:1, text:'Definir los selectores', completed: true},
  { key:2, text:'Definir colores de fondo', completed: false},
  { key:3, text:'Organizar la tipografía', completed: false},
  { key:4, text:'Organizar la posición de elemento', completed: false},
  { key:5, text:'Incluir detalles (sombras, bordes, overflow, etc)', completed: false},
  { key:6, text:'Definir espacios entre elementos', completed: false},
  { key:7, text:'Quitar referencias de prueba y ultimar detalles', completed: false},
  { key:8, text:'Revisar el responsive', completed: false},
  { key:9, text:'Organizar el css alfabéticamente', completed: false},
  { key:10, text:'Mandar el commit', completed: false},
]

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');


function App() {
  const{
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);



  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText  = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

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

  return(
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
