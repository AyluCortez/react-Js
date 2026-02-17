import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    // El estado 'count' maneja el número que el usuario ve en pantalla
    const [count, setCount] = useState(initial);

    const sumar = () => {
        // Requisito: No permitir aumentar más allá del stock disponible
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        // Requisito: No permitir valores menores a 1
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center" style={{ width: '200px' }}>
            <div className="btn-group mb-2 w-100">
                <button className="btn btn-outline-dark" onClick={restar}>-</button>
                {/* Mostramos la cantidad actual */}
                <span className="btn border-dark px-4 fw-bold">{count}</span>
                <button className="btn btn-outline-dark" onClick={sumar}>+</button>
            </div>
            
            {/* El botón 'Agregar' ejecuta la función onAdd que viene por props */}
            <button 
                className="btn btn-dark w-100" 
                onClick={() => onAdd(count)}
                disabled={stock <= 0} // Si no hay stock, el botón se bloquea
            >
                {stock <= 0 ? "Sin Stock" : "Agregar al carrito"}
            </button>
        </div>
    );
};

export default ItemCount;