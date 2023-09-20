import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro React.js', completed: false},
  { text: 'Llorar con la Llorona', completed: true},
  { text: 'Chinga a su madre', completed: false},
  { text: 'Guero culero', completed: false},
]

function App() {
  //estados
  const [todos, setTodos] = React.useState(defaultTodos);

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

  const completeTodo = key => {
    const newTodos = [...todos];
    if(newTodos[key].completed){
      newTodos[key].completed = false;
    } else{
      newTodos[key].completed = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = key => {
    const newTodos = [...todos];
    newTodos.splice(key, 1);
    setTodos(newTodos);
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
            id={index}
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
