import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Obtiene el ID del producto de la URL (/item/1)

    useEffect(() => {
        getProductById(id).then(res => setProduct(res));
    }, [id]);

    return (
        <div className="container mt-5">
            {/* Si el producto ya cargó, mostramos el detalle */}
            {product && <ItemDetail {...product} />}
        </div>
    );
};
export default ItemDetailContainer;