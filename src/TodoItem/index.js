// TodoItem.js
import React, { useEffect, useContext } from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { Working } from '../TodoIcon/Working';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { PriorityUp } from '../TodoIcon/PriorityUp';
import { PriorityDown } from '../TodoIcon/PriorityDown';
import { TodoContext } from '../TodoContext';
import { Draggable } from 'react-beautiful-dnd';
import './TodoItem.css';

function TodoItem({
  keyId,
  text,
  id,
  index,
  completed,
  onComplete,
  onWorking,
  onDelete,
  upPriority,
  downPriority,
}) {
  const { setOpenModal, setTodoEdit } = useContext(TodoContext);
  const [classNames, setClassNames] = React.useState('Item palpite-in');

  useEffect(() => {
    setTimeout(() => {
      setClassNames(`Item Item-completed--${completed}`);
    }, 500);
  }, [completed]);

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <li
          id={id}
          className={classNames}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={() => {
            setOpenModal((state) => !state);
            setTodoEdit(keyId);
          }}
        >
          <Working completed={completed} onWorking={onWorking} />
          <CompleteIcon completed={completed} onComplete={onComplete} />
          <div className="Item__text">
            <p className="m-0"> {text} </p>
          </div>
          <DeleteIcon onDelete={onDelete} />
          <PriorityDown downPriority={downPriority} />
          <PriorityUp upPriority={upPriority} />
        </li>
      )}
    </Draggable>
  );
}

export { TodoItem };
