import { ShoppingCart } from 'lucide-react'; // es una libreria con iconos

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-light position-relative">
        🛒 {/* Despues lo cambio por un icono */}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </button>
    </div>
  );
};

export default CartWidget;