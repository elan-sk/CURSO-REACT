import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css';


function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
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
                    Escribe tu nuevo TODO
                </b>
            </label>
            <textarea
                placeholder='Ingresa tu nuevo TODO'
                className='form-control textarea'
                value={newTodoValue}
                onChange={onChange}
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
                    Añadir
                </button>
            </div>
        </form>
    );
}
export { TodoForm };
