import React from "react";
import { TodoIcon } from '.';
import { TodoContext } from '../TodoContext'

function DeleteIconAll(){
    const {
        deleteAll,
    } = React.useContext(TodoContext);
    return (
        <TodoIcon
            type="deleteAll"
            color="red"
            hover="red-dark"
            onClick={deleteAll}
            hoverMessage="Eliminar todas las tareas"
        />
    );
}

export { DeleteIconAll };
