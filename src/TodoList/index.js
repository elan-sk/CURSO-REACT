import './TodoList.css'

function TodoList({children}) {
    return (
        <ul className="list p-0">
            {children}
        </ul>
    );
}

export { TodoList };
