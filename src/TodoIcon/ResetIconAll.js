import React from "react";
import { TodoIcon } from '.';
import { TodoContext } from '../TodoContext'

function ResetIconAll(){
    const {
        resetAll,
        loading,
        todosLength,
    } = React.useContext(TodoContext);
    return (
        <>
            {!loading && todosLength() > 0 &&(
                <TodoIcon
                    type="resetAll"
                    color="blue"
                    hover="blue-lt"
                    onClick={resetAll}
                    hoverMessage="Restablece todas las tareas"
                />
            )}
        </>
    );
}

export { ResetIconAll };
