import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para leer la URL
import { db } from "../services/firebase.jsx";
import { collection, getDocs, query, where } from "firebase/firestore"; // Importaciones correctas de Firebase
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // 'id' será la categoría si el usuario hace clic en el NavBar

    useEffect(() => {
        setLoading(true);

        // Armamos la consulta a la colección "productos" (asegurate que en Firebase se llame así y no "products")
        const productsRef = id
            ? query(collection(db, "productos"), where("category", "==", id)) // Filtra por categoría
            : collection(db, "productos"); // Trae todos si no hay categoría

        getDocs(productsRef)
            .then((res) => {
                // Adaptamos la respuesta de Firebase a nuestro formato
                const productsAdapted = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.error("Error buscando productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]); // El useEffect se vuelve a ejecutar si cambia el id de la URL

    if (loading) return <Loader />; // Feedback visual de carga

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">{greeting || "Bienvenidos a la tienda"}</h1>
            {/* Le pasamos los productos ya traídos de Firebase a tu componente visual */}
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;