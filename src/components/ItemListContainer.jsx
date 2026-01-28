const ItemListContainer = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          {/* se muestra el mensaje que viene desde App.jsx */}
          <h1 className="display-4">{props.greeting}</h1>
          <p className="lead">Nuestros productos estarán disponibles pronto.</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;