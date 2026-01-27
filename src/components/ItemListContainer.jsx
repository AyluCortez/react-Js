const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="alert alert-info text-center">
        <h2>{greeting}</h2>
      </div>
      <p className="text-center">Próximamente verás nuestro catálogo aquí.</p>
    </div>
  );
};

export default ItemListContainer;