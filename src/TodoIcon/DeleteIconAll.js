import React from "react";
import { TodoIcon } from '.';
import { TodoContext } from '../TodoContext'

function DeleteIconAll(){
    const {
        deleteAll,
        loading,
        todosLength,
    } = React.useContext(TodoContext);
    return (
        <>
            {!loading && todosLength() > 0 &&(
                <TodoIcon
                    type="deleteAll"
                    color="red"
                    hover="red-dark"
                    onClick={deleteAll}
                    hoverMessage="Eliminar todas las tareas"
                />
            )}
        </>
    );
}

export { DeleteIconAll };
