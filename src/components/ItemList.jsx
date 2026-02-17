import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="row">
            {/* Recorremos el array y creamos un componente Item por cada producto */}
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};
export default ItemList;