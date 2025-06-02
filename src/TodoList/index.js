import './TodoList.css';
import { Droppable } from 'react-beautiful-dnd';

function TodoList({ children }) {
  return (
    <Droppable droppableId="todo-list">
      {(provided) => (
        <ul
          id="TodoList"
          className="list p-0"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {children}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export { TodoList };
