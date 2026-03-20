import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, total, removeItem } = useContext(CartContext);

    // Si el carrito está vacío, mostramos un mensaje y link al inicio
    if (cart.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <h1>El carrito está vacío</h1>
                <Link to="/" className="btn btn-primary mt-3">Ver productos</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Tu Carrito</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.name}</td>
                            <td>{prod.quantity}</td>
                            <td>${prod.price}</td>
                            <td>${prod.price * prod.quantity}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => removeItem(prod.id)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h4>Total: ${total}</h4>
                <div>
                    <button onClick={clearCart} className="btn btn-outline-danger me-2">Vaciar Carrito</button>
                    <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;