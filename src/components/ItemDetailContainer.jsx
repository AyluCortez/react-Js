import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
// Ruta corregida a tu carpeta actual en plural
import { db } from "../services/firebase"; 
import ItemDetail from "./ItemDetail"; 
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "productos", id);

        getDoc(docRef)
            .then((res) => {
                if (res.exists()) {
                    setDetail({ id: res.id, ...res.data() });
                } else {
                    console.log("El producto no existe en Firebase");
                }
            })
            .catch((error) => console.error("Error obteniendo detalle:", error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader />;

    if (!detail) return <h2 className="text-center mt-5">Producto no encontrado</h2>;

    return (
        <div className="container mt-5">
            <ItemDetail {...detail} />
        </div>
    );
};

export default ItemDetailContainer;