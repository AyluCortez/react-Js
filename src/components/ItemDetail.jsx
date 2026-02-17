import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    // Esta función maneja la lógica de agregar al carrito (para la entrega 3)
    const onAdd = (quantity) => {
        console.log(`Agregado al carrito: ${quantity} unidades de ${name}`);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded shadow" alt={name} />
                </div>
                <div className="col-md-6 border-start ps-5">
                    <h2 className="fw-bold">{name}</h2>
                    <p className="text-muted">Categoría: {id}</p>
                    <p className="py-3">{description}</p>
                    <h3 className="text-primary mb-4">${price}</h3>
                    
                    {/* Requisito: ItemCount dentro de ItemDetail */}
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;