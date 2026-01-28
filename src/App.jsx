import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; 
function App() {
  return (
    <div className="App">
      {/* 1. La barra de navegación */}
      <NavBar />
      
      {/* 2. El contenedor con el saludo personalizado mediante Props */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
}

export default App;