import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className="create-todo-button" onClick = {e =>{
            console.log('CreateTodoButton');
            console.log(e);
            console.log(e.target);
        }}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

