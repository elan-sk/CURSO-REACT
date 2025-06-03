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
    });

    const [isEmpty, setIsEmpty] = React.useState(true);

    const onSubmit = React.useCallback((event) => {
        setOpenModal(false);

        if (todoEdit) {
            setTodo(todoEdit, newTodoValues);
        } else {
            event.preventDefault();
            addTodo(newTodoValues);
        }
    }, [addTodo, setOpenModal, setTodo, todoEdit, newTodoValues]);

    const onReset = () => {
        setOpenModal(false);
    }

    const { text } = newTodoValues;
    const quillRef = React.useRef(null);

    React.useEffect(() => {
        const isEditorEmpty = !text || text === '<p><br></p>' || text.trim() === '';
        setIsEmpty(isEditorEmpty);
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                const isEditorEmpty = !text || text === '<p><br></p>' || text.trim() === '';
                if (!isEditorEmpty) {
                    onSubmit(event);
                }
            }

            if (event.key === 'Escape') {
                setOpenModal(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [text, setOpenModal, onSubmit]);

    React.useEffect(() => {
        if (quillRef.current) {
            const editor = quillRef.current.getEditor(); // Quill instance
            editor.focus(); // Pone el foco en el editor
        }
    }, []);


    return (
        <form onSubmit={onSubmit} onReset={onReset} className='form d-flex flex-column p-3 mb-5'>
            <label className='p-2'>
                <b>
                    {todoEdit ? 'Modifica tu tarea':'Escribe tu nueva tarea'}
                </b>
            </label>
            <ReactQuill
                ref={quillRef}
                name="text"
                value={text || ''}
                onChange={(value) =>
                    setNewTodoValues(prev => ({ ...prev, text: value }))
                }
            />
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
