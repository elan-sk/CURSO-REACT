import React from "react";
import { TodoIcon } from './'

function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon
            type="check"
            color={completed ? 'green' : 'gray'}
            hover="green"
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };
