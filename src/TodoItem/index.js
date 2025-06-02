// TodoItem.js
import React, { useEffect, useContext } from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { Working } from '../TodoIcon/Working';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
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
                    <span className='items-eyebrows'>
                        <Working completed={completed} onWorking={onWorking} />
                        <CompleteIcon completed={completed} onComplete={onComplete} />
                    </span>
                    <div className='Item__text' dangerouslySetInnerHTML={{ __html: text }} />
                    <DeleteIcon onDelete={onDelete} />
                </li>
            )}
        </Draggable>
    );
}

export { TodoItem };
