import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

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
