import React from 'react'
import './TodoIcon.css'
import { ReactComponent as CheckSVG } from './icons/check.svg';
import { ReactComponent as DeleteSVG } from './icons/delete.svg';
import { ReactComponent as CaretDownSVG} from './icons/caret-down.svg';
import { ReactComponent as CaretUpSVG } from './icons/caret-up.svg';

const iconType = {
    'check': <CheckSVG/>,
    'delete': <DeleteSVG/>,
    'priorityUp': <CaretUpSVG/>,
    'priorityDown': <CaretDownSVG/>,
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
