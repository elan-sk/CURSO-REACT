import '../TodoLoading.css';

function LoadingCounter() {
    return (
        <h1 className="counter w-100">
            <span className="loading w-25 p-2 px-5">
                Cargando...
            </span>
        </h1>
    );
}

export { LoadingCounter };
