import{CompleteIcon} from '../TodoIcon/CompleteIcon'
import{DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css';

function TodoItem({text, id, completed, onComplete, onDelete}) {
    return (
        <li id={id} className={completed ? 'Item Item--completed' : 'Item'} >
            <CompleteIcon
                completed = {completed}
                onComplete = {onComplete}
            />
            <p className='m-0'> {text} </p>
            <DeleteIcon
                onDelete = {onDelete}
            />
        </li>
    );
}

export { TodoItem };
