import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="fw-bold">${price}</p>
                    {/* Botón que nos lleva a la ruta dinámica del detalle del producto */}
                    <Link to={`/item/${id}`} className="btn btn-dark">Ver Detalle</Link>
                </div>
            </div>
        </div>
    );
};
export default Item;