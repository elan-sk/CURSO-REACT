import React from "react";
import { TodoIcon } from './';

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
