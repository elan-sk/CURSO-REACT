import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css'

const defaultTodos = [
  { text: 'Definir los selectores', completed: true},
  { text: 'Definir colores de fondo', completed: false},
  { text: 'Organizar la tipografía', completed: false},
  { text: 'Organizar la posición de elemento', completed: false},
  { text: 'Incluir detalles (sombras, bordes, overflow, etc)', completed: false},
  { text: 'Definir espacios entre elementos', completed: false},
  { text: 'Quitar referencias de prueba y ultimar detalles', completed: false},
  { text: 'Revisar el responsive', completed: false},
  { text: 'Organizar el css alfabéticamente', completed: false},
  { text: 'Mandar el commit', completed: false},
]

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  }else{
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
    parsedTodos = defaultTodos;
  }

  const [todos, setTodos] = React.useState(parsedTodos);

  const [searchValue, setSearchValue] = React.useState(parsedTodos);

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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = key => {
    const newTodos = [...todos];
    if(newTodos[key].completed){
      newTodos[key].completed = false;
    } else{
      newTodos[key].completed = true;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = key => {
    const newTodos = [...todos];
    newTodos.splice(key, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map( (todo, index) => (
          <TodoItem
            key={index}
            id={'Item-'+index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
