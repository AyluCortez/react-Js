import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para leer el ID de la categoría desde la URL
import { getProducts } from '../asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); // id será 'celulares' o 'notebooks' según el clic en la NavBar

    useEffect(() => {
        getProducts().then(res => {
            if (id) {
                // Si hay un ID en la URL, filtramos el array de productos
                setProducts(res.filter(p => p.category === id));
            } else {
                // Si no hay ID (Estamos en la Home), mostramos todo
                setProducts(res);
            }
        });
    }, [id]); // El efecto se dispara cada vez que el ID de la URL cambie

    return (
        <div className="container mt-4">
            <h2 className="text-center">{id ? `Sección: ${id}` : greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};
export default ItemListContainer;