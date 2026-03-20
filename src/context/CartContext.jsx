import { createContext, useState } from "react";

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el Provider que envolverá la app
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar producto al carrito
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    // Eliminar un producto específico
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    // Vaciar carrito completo
    const clearCart = () => setCart([]);

    // Validar si ya está en el carrito
    const isInCart = (itemId) => cart.some(prod => prod.id === itemId);

    // Calcular el total de unidades (Para el CartWidget)
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);

    // Calcular el precio total
    const total = cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};