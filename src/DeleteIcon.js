import React from "react";
import { TodoIcon } from './TodoIcon';

function DeleteIcon({onDelete}){
    return (
        <TodoIcon
            type="delete"
            color="gray"
            hover="red"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };
