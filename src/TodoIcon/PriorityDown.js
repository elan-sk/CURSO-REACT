import React from "react";
import { TodoIcon } from '.'

function PriorityDown({downPriority}){
    return (
        <TodoIcon
            type="priorityDown"
            color={'gray'}
            hover="red"
            onClick={downPriority}
        />
    );
}

export { PriorityDown };
