import './TodoItem.css';

function TodoItem(props) {
    return (
        <li id={props.id} className={props.completed ? 'item item--completed' : 'item'} >
            <span className="item__completed" onClick={props.onComplete}>✔</span>
            <p> {props.text} </p>
            <span className="item__exit" onClick={props.onDelete}>✖</span>

        </li>
    );
}

export { TodoItem };
