import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
// Importamos el contexto para poder guardar el producto
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    // Estado local para saber si el usuario ya hizo clic en agregar
    const [quantityAdded, setQuantityAdded] = useState(0);

    // Nos traemos la función addItem de nuestro Contexto Global
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity); // Guardamos la cantidad elegida

        // Armamos el producto y lo mandamos al carrito global
        const item = { id, name, price, img };
        addItem(item, quantity);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded shadow" alt={name} />
                </div>
                <div className="col-md-6 border-start ps-5">
                    <h2 className="fw-bold">{name}</h2>
                    <p className="text-muted">Categoría: {id}</p>
                    <p className="py-3">{description}</p>
                    <h3 className="text-primary mb-4">${price}</h3>
                    
                    {/* RENDERIZADO CONDICIONAL: Ocultar ItemCount si ya se agregó */}
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='btn btn-success w-100'>Terminar compra</Link>
                        ) : (
                            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;