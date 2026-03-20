import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
// La importación de Firebase la dejamos lista para cuando lo conectes
import { db } from "../service/firebase/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Loader from "./Loader";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Obtenemos los datos del formulario
        const data = new FormData(e.target);
        
        // Estructura de la orden para Firebase
        const order = {
            buyer: {
                name: data.get('name'),
                phone: data.get('phone'),
                email: data.get('email')
            },
            items: cart,
            total: total,
            date: serverTimestamp()
        };

        try {
            // Referencia a la colección 'orders' (se creará sola en tu Firebase)
            const ordersRef = collection(db, "orders");
            const orderAdded = await addDoc(ordersRef, order);
            
            setOrderId(orderAdded.id); // Guardamos el ID de la orden generada
            clearCart(); // Vaciamos el carrito tras la compra exitosa
        } catch (error) {
            console.error("Error al crear la orden", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loader />;
    
    // Feedback final de compra exitosa
    if (orderId) {
        return (
            <div className="container mt-5 text-center">
                <h2 className="text-success fw-bold">¡Gracias por tu compra!</h2>
                <p className="lead mt-3">Tu número de orden es: <br/> <strong>{orderId}</strong></p>
                <p>Guarda este código para el seguimiento de tu pedido.</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Finalizar Compra</h2>
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="col-md-6 shadow p-4 rounded bg-light">
                    <div className="mb-3">
                        <label className="form-label">Nombre completo</label>
                        <input name="name" type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input name="phone" type="number" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold">Confirmar Pedido</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;