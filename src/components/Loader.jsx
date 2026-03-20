const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <div className="text-center">
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <h4 className="mt-3">Cargando información...</h4>
            </div>
        </div>
    );
};

export default Loader;