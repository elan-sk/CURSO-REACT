import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        todoEdit,
        getTodo,
        setTodo,
    } = React.useContext(TodoContext);
    const [newTodoValues, setNewTodoValues] = React.useState({
        text: todoEdit ? getTodo(todoEdit).text : null,
        priority: getTodo(todoEdit)?.priority || null,
    });
    const [isEmpty, setIsEmpty] = React.useState(true);

    const onSubmit = (event) => {
        setOpenModal(false);

        if (todoEdit ) {
            setTodo(todoEdit, newTodoValues);
        } else {
            event.preventDefault();
            addTodo(newTodoValues);
        }
    }

    const onReset = () => {
        setOpenModal(false);
    }

    const { text, priority } = newTodoValues;

    React.useEffect(() => {
        const isEditorEmpty = !text || text === '<p><br></p>' || text.trim() === '';
        setIsEmpty(isEditorEmpty);
    }, [text]);


    return (
        <form onSubmit={onSubmit} onReset={onReset} className='form d-flex flex-column p-3 mb-5'>
            <label className='p-2'>
                <b>
                    {todoEdit ? 'Modifica tu tarea':'Escribe tu nueva tarea'}
                </b>
            </label>
            <ReactQuill
                name="text"
                value={text || ''}
                onChange={(value) =>
                    setNewTodoValues(prev => ({ ...prev, text: value }))
                }
            />
            <div>
                <input
                    hidden
                    name="priority"
                    value={priority}
                    />
            </div>
            <div className='d-flex justify-content-center'>
                <button
                    disabled={isEmpty}
                    type='submit'
                    className='TodoForm-button TodoForm-button--add btn btn-success mt-3 m-2 order-1'>
                    {todoEdit ? 'Modificar':'Añadir'}
                </button>
                <button
                    type='reset'
                    className='TodoForm-button TodoForm-button--cancel btn btn-secondary mt-3 m-2 order-0'>
                    Cancelar
                </button>
            </div>
        </form>
    );
}
export { TodoForm };
