## 🚀 Black-Store | Proyecto Final React.js
El objetivo principal fue crear un E-commerce funcional, robusto y escalable, aplicando los conceptos más modernos de la librería y la gestión de datos en tiempo real con Firebase.

## 🎯 Objetivo del Proyecto
La meta fue construir una plataforma de ventas que no solo sea visualmente atractiva, sino que resuelva problemas reales de gestión. El flujo incluye desde la visualización dinámica de productos según su categoría (Celulares, Notebooks, Tablets), hasta la finalización de compra con un sistema de órdenes persistente.

## 🛠️ Tecnologías Utilizadas
React.js: Biblioteca principal para la construcción de la interfaz.

React Router DOM: Para la navegación entre secciones sin recargar la página.

Firebase & Firestore: Base de datos NoSQL para el almacenamiento de productos y la generación de órdenes de compra en tiempo real.

React Hook Form: Implementado para la validación de formularios y captura de datos del cliente.

Context API: Gestión del estado global del carrito de compras.

Bootstrap: Framework de CSS para asegurar un diseño responsivo y moderno.

## 📋 Funcionalidades Clave
Carga Masiva de Datos: Implementé una función de administración (subirProd) que permite volcar todo el inventario de prueba desde un archivo Mock directamente a la base de datos de Firebase, optimizando el tiempo de desarrollo.

Filtrado por Categorías: Navegación dinámica que permite segmentar el catálogo de productos de forma eficiente.

Carrito de Compras: Sistema que permite sumar, eliminar productos y calcular el total de la compra de forma automática.

Checkout & Validación: Un formulario de compra con restricciones (campos obligatorios y formato de e-mail) que genera un número de orden único al finalizar la transacción.


## Instalación
1. Clonar: `git clone https://github.com/AyluCortez/react-Js.git`
2. Instalar: `npm install`
3. Iniciar: `npm run dev`
