import './TodoList.css'

function TodoList({children}) {
    return (
        <ul id='TodoList' className="list p-0">
            {children}
        </ul>
    );
}

export { TodoList };
