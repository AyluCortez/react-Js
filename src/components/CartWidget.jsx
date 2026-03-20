import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    // Traemos totalQuantity del contexto
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="btn btn-outline-light position-relative">
            {/* Ícono de carrito (puedes usar un emoji o FontAwesome) */}
            <i className="bi bi-cart3"></i> 🛒
            
            {/* Solo mostramos el número si hay productos (Renderizado Condicional) */}
            {totalQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
};

export default CartWidget;