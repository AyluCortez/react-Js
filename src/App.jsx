import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';

function App() {
  return (
    /* BrowserRouter envuelve toda la app para habilitar la navegación */
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal: Muestra todos los productos */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Coder Store" />} />
        
        {/* Ruta con parámetro dinámico (:id): Filtra por categoría */}
        <Route path="/category/:id" element={<ItemListContainer />} />
        
        {/* Ruta de detalle: Muestra un solo producto según su ID */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;