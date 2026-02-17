import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Link a "/" para volver siempre al inicio */}
        <Link className="navbar-brand fw-bold" to="/">BLACK-STORE</Link>
        
        <div className="navbar-nav mx-auto">
          {/* NavLink detecta si la ruta coincide y puede aplicar estilos de "activo" */}
          <NavLink className="nav-link" to="/category/celulares">Celulares</NavLink>
          <NavLink className="nav-link" to="/category/notebooks">Notebooks</NavLink>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;