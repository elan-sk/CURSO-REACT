import React from "react";
import { TodoIcon } from '.'

function PriorityUp({upPriority}){
    return (
        <TodoIcon
            type="priorityUp"
            color={'gray'}
            hover="green"
            onClick={upPriority}
        />
    );
}

export { PriorityUp };
