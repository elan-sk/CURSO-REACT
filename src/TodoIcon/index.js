import './TodoIcon.css'
import { ReactComponent as CheckSVG } from './icons/check.svg';
import { ReactComponent as DeleteSVG } from './icons/delete.svg';
import { ReactComponent as DeleteIconAll } from './icons/trash-solid.svg';
import { ReactComponent as ResetIconAll } from './icons/reset.svg';
import { ReactComponent as WorkingSVG } from './icons/person-digging.svg';

const iconType = {
    'check': <CheckSVG/>,
    'delete': <DeleteSVG/>,
    'deleteAll': <DeleteIconAll/>,
    'resetAll': <ResetIconAll/>,
    'working': <WorkingSVG/>,
}

const TodoIcon = ({ type, color, hover, onClick, hoverMessage }) => {
    return (
        <span className={`
            Icon-svg
            Icon-svg--${type}
            Icon-svg--${color}
            Icon-svg--hover-${hover}
        `} onClick={onClick}>
            {iconType[type]}
            {hoverMessage && (
                <span className='Icon-svg--hover-message'>
                    {hoverMessage}
                </span>
            )}
        </span>
    )
}

export { TodoIcon };
