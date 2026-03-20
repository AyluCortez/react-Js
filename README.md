# 🛒 Black Store - E-commerce React

Este proyecto es una aplicación de comercio electrónico (Single Page Application) desarrollada como proyecto final para el curso de React en Coderhouse. Permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, ver detalles específicos de cada ítem, gestionar un carrito de compras y generar una orden de compra.

## 🚀 Funcionalidades

* **Navegación fluida:** Implementada con React Router DOM para navegar entre secciones sin recargar la página.
* **Filtrado dinámico:** Uso de parámetros en la URL (React Router) para filtrar productos por categoría.
* **Gestión de Carrito:** Implementación de Context API para manejar el estado global de las compras (agregar productos, eliminar, vaciar carrito, y calcular cantidad/precio total).
* **Renderizado Condicional:** Uso de loaders y feedback visual durante las esperas asíncronas para mejorar la experiencia del usuario.
* **Conexión a Base de Datos:** Integración con Firebase (Firestore) para alojar el catálogo de productos y registrar las órdenes de compra generadas en el Checkout.

## 🛠️ Tecnologías y Herramientas

* **Core:** React (inicializado con Vite)
* **Estilos:** HTML, CSS y Bootstrap
* **Rutas:** React Router DOM
* **Backend as a Service:** Firebase / Firestore
* **Control de Versiones:** Git y GitHub

## ⚙️ Instalación y Ejecución Local

Para correr este proyecto en tu computadora, seguí estos pasos:

1. Clonar el repositorio:
   ```bash
   git clone [URL_DE_TU_REPOSITORIO]