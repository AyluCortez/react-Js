import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="mb-4">Página no encontrada</h2>
            <p className="lead mb-5">
                Lo sentimos, la sección que buscas no existe en nuestra tienda.
            </p>
            {/* Link para volver a la Home sin recargar la página */}
            <Link to="/" className="btn btn-dark">
                Volver al inicio
            </Link>
        </div>
    );
};

export default Error;