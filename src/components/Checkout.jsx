import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
    const [loading, setLoading] = useState(false);
    
    // USAMOS 'total' y 'clearCart' QUE SON LOS QUE TENÉS EN CART.JSX
    const { cart, total, clearCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer,
            items: cart.map(item => ({ id: item.id, title: item.name, price: item.price })),
            total: total, // <--- CAMBIAMOS cartTotal() POR total
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart(); // <--- USAMOS EL NOMBRE QUE TENÉS EN CART.JSX
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="container mt-5 text-center">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required />
                <input className="form-control mb-2" type="number" name="phone" placeholder="Teléfono" onChange={handleInputChange} required />
                <input className="form-control mb-2" type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Procesando..." : "Generar Orden"}
                </button>
            </form>
        </div>
    );
};

export default Checkout;