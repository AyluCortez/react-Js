import { ShoppingCart } from 'lucide-react'; // O cualquier librería de iconos

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-light position-relative">
        🛒 {/* Puedes usar un emoji o un icono de FontAwesome */}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </button>
    </div>
  );
};

export default CartWidget;