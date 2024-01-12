import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <div className="search">
            <input
                className="search__input"
                placeholder="Buscar"
                value={searchValue}
                onChange={event => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };
