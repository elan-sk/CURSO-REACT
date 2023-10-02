import React from 'react'
import './TodoIcon.css'
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconType = {
    'check': <CheckSVG/>,
    'delete': <DeleteSVG/>
}

const TodoIcon = ({ type, color, hover, onClick }) => {
    return (
        <span className={`
            Icon-svg
            Icon-svg--${type}
            Icon-svg--${color}
            Icon-svg--hover-${hover}
        `} onClick={onClick}>
            {iconType[type]}
        </span>
    )
}

export { TodoIcon };
