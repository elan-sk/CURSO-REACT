import React from "react";
import { TodoIcon } from '.'

function Working({completed, onWorking}){
    return (
        <TodoIcon
            type="working"
            color={completed === false ? 'orange' : 'gray'}
            hover="orange"
            onClick={onWorking}
        />
    );
}

export { Working };
