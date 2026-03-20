import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import Cart from './components/Cart';

// 1. Acá importamos el contexto
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <BrowserRouter>
      {/* 2. Envolvemos toda la aplicación (NavBar y Routes) con el CartProvider */}
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Coder Store" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;