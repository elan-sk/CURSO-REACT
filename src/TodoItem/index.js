import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { TodoContext } from '../TodoContext'
import './TodoItem.css'

function TodoItem({ keyId, text, id, completed, onComplete, onDelete }) {
    const {
        setOpenModal,
        setTodoEdit,
    } = React.useContext(TodoContext);
    return (
        <li id={id} className={completed ? 'Item Item--completed' : 'Item'}
            onDoubleClick={() => {
                    setOpenModal(state => !state);
                    setTodoEdit(keyId);
                }
            }
        >
            <CompleteIcon
                completed={completed}
                onComplete={onComplete}
            />
            <p className='m-0'> {text} </p>
            <DeleteIcon
                onDelete={onDelete}
            />
        </li>
    );
}

export { TodoItem };
