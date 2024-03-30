import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css';


function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        modeEdit,
        getTodo,
        setTodo,
    } = React.useContext(TodoContext);

    let textAreaInitial = modeEdit ? (
        getTodo(modeEdit).text
    ):(
        ''
    );

    const [newTodoValue, setNewTodoValue] = React.useState(textAreaInitial);

    const onSubmit = (event) => {
        setOpenModal(false);

        if (modeEdit) {
            setTodo(modeEdit, newTodoValue);
        } else {
            event.preventDefault();
            addTodo(newTodoValue);
        }
    }

    const onReset = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit} onReset={onReset} className='form d-flex flex-column p-3 mb-5'>
            <label className='p-2'>
                <b>
                    {modeEdit ? (
                        'Modifica tu TODO'
                    ):(
                        'Escribe tu nuevo TODO'
                    )}
                </b>
            </label>
            <textarea
                placeholder='Ingresa tu nuevo TODO'
                className='form-control textarea'
                onChange={onChange}
                value={newTodoValue}
            />
            <div className='d-flex justify-content-center'>
                <button
                    type='reset'
                    className='TodoForm-button TodoForm-button--cancel btn btn-secondary mt-3 m-2'>
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add btn btn-success mt-3 m-2'>
                    {modeEdit ? (
                        'Modificar'
                    ):(
                        'Añadir'
                    )}
                </button>
            </div>
        </form>
    );
}
export { TodoForm };
