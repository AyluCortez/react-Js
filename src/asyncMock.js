const products = [
    {  name: 'iPhone 15', price: 1700, category: 'celulares', img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ', stock: 10, description: 'Nuevo iPhone 15' },
    {  name: 'Samsung Galaxy S24', price: 500, category: 'celulares', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 7, description: 'Samsung S24 Ultra' },
    {  name: 'MacBook Pro M3', price: 1800, category: 'notebooks', img: 'https://stylewatch.vtexassets.com/arquivos/ids/205763/Apple-Macbook-APPMQD32LEA_05.jpg?v=637751045334670000', stock: 5, description: 'MacBook Pro para trabajo pesado' },  
    {  name: 'Lenovo Legion 5', price: 1200, category: 'notebooks', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 3, description: 'Notebook gamer Lenovo' }
    {  name: 'AirPods Pro', price: 250, category: 'accesorios', img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000', stock: 15, description: 'Auriculares inalámbricos con cancelación de ruido' },
    {  name: 'Apple Watch Series 9', price: 400, category: 'accesorios', img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MKUQ3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1694491675000', stock: 8, description: 'Reloj inteligente con funciones avanzadas de salud y fitness' }
    {  name: 'iPad Pro M2', price: 900, category: 'tablets', img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-11-select-202104_FMT_WHH?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1617126611000', stock: 6, description: 'Tablet de alto rendimiento para profesionales' }
    {  name: 'Samsung Galaxy Tab S8', price: 700, category: 'tablets', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 4, description: 'Tablet Android con pantalla de alta resolución' }
    {  name: 'Google Pixel 8', price: 600, category: 'celulares', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 9, description: 'Smartphone con cámara de alta calidad y Android puro' }
    { name: 'Sony WH-1000XM4', price: 350, category: 'accesorios', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 12, description: 'Auriculares inalámbricos con cancelación de ruido líder en la industria' }
    { name: 'Microsoft Surface Pro 8', price: 1100, category: 'tablets', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 5, description: 'Tablet híbrida con rendimiento de laptop y pantalla táctil' }
    { name: 'Dell XPS 13', price: 1300, category: 'notebooks', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 4, description: 'Ultrabook de alta gama con diseño compacto y pantalla InfinityEdge' }

];

// Simulamos una demora de red (Asincronía) para que el e-commerce sea realista
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

// Buscamos un producto específico por su ID único
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.find(p => p.id === id)), 500);
    });
};