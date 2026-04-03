import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout.jsx';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* El Provider permite que el carrito sea persistente en toda la navegación */}
      <CartProvider>
        <NavBar />
        <Routes>
          {/* Ruta principal: Muestra todos los productos desde Firebase */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Black Store" />} />
          
          {/* Rutas dinámicas para categorías (Celulares, Notebooks, etc.) */}
          <Route path="/category/:id" element={<ItemListContainer />} />
          
          {/* Ruta para el detalle de un producto específico */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          
          {/* Vista del carrito de compras */}
          <Route path="/cart" element={<Cart />} />
          
          {/* RUTA CRÍTICA: Declaración del Checkout para procesar la orden en Firebase */}
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Manejo de rutas inexistentes */}
          <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;