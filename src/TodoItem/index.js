import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { PriorityUp } from '../TodoIcon/PriorityUp'
import { PriorityDown } from '../TodoIcon/PriorityDown'
import { TodoContext } from '../TodoContext'

import './TodoItem.css'

function TodoItem({
        keyId,
        text,
        id,
        completed,
        onComplete,
        onDelete,
        upPriority,
        downPriority
    }) {
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

            <div className='Item__text'>
                <p className='m-0'> {text} </p>
            </div>

            <DeleteIcon
                onDelete={onDelete}
            />
            <PriorityDown
                downPriority={downPriority}
            />
            <PriorityUp
                upPriority={upPriority}
            />
        </li>
    );
}

export { TodoItem };
