import { ShoppingCart } from 'lucide-react'; // O cualquier librería de iconos

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCart size={24} />
      <span className="badge bg-secondary">0</span> 
    </div>
  );
};

export default CartWidget;