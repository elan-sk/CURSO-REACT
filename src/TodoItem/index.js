import React from 'react';
import { useEffect } from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { Working } from '../TodoIcon/Working'
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
        onWorking,
        onDelete,
        upPriority,
        downPriority
    }) {

    const {
        setOpenModal,
        setTodoEdit,
    } = React.useContext(TodoContext);
    const [classNames, setClassNames] = React.useState('Item palpite-in');

    useEffect(() => {
        setTimeout(() => {
            setClassNames(`Item Item-completed--${completed}`);
        }, 500);

        clearTimeout(setTimeout);
    }, [completed]);

    return (
        <li
            id={id}
            className={classNames}
            onDoubleClick={() => {
                    setOpenModal(state => !state);
                    setTodoEdit(keyId);
                }
            }
        >

            <Working
                completed={completed}
                onWorking={onWorking}
            />

            <CompleteIcon
                completed={completed}
                onComplete={onComplete}
            />

            <div className='Item__text'>
                <p className='m-0'> {text} </p>
            </div>

            {/* {completed === false && (
                <header className='Item__state Item__state--false fade-in text-center position-absolute'>
                    <strong className='m-0'> Trabajando </strong>
                </header>
            )}

            {completed && (
                <header className='Item__state Item__state--true fade-in text-center position-absolute'>
                    <strong className='m-0'> Finalizada </strong>
                </header>
            )} */}

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
