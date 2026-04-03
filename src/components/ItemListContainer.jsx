// 1. PRIMERO VAN LOS IMPORTS 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { products } from "../mock/asynData"; 

const ItemListContainer = ({ greeting }) => {
    const [productosData, setProductosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    
    const subirProd = () => {
        const collASubir = collection(db, "productos");
        products.map((prod) => addDoc(collASubir, prod));
        alert("¡Carga masiva realizada!");
    };

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos");
        const q = id ? query(productosRef, where("category", "==", id)) : productosRef;

        getDocs(q)
            .then((res) => {
                setProductosData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">{greeting}</h1>
            <div className="text-center mb-4">
            </div>
            <ItemList products={productosData} />
        </div>
    );
};

export default ItemListContainer;