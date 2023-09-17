import './TodoItem.css';

function TodoItem({id, text, completed}) {
    return (
        <li id={id} className={completed ? 'item item--completed' : 'item'} >
            <span className="item__completed" >✔</span>
            <p> {text} </p>
            <span className="item__exit">✖</span>

        </li>
    );
}

export { TodoItem };
