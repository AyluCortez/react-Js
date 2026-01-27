import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Mi Tienda</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#">Electrónica</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ropa</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Hogar</a></li>
          </ul>
        </div>
        {/* Aquí renderizamos el widget del carrito */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;