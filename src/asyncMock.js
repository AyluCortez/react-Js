const products = [
    { id: '1', name: 'iPhone 15', price: 1700, category: 'celulares', img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ', stock: 10, description: 'Nuevo iPhone 15' },
    { id: '2', name: 'Samsung Galaxy S24', price: 500, category: 'celulares', img: 'https://http2.mlstatic.com/D_895048-MLU69664239579_052023-C.jpg', stock: 7, description: 'Samsung S24 Ultra' },
    { id: '3', name: 'MacBook Pro M3', price: 1800, category: 'notebooks', img: 'https://stylewatch.vtexassets.com/arquivos/ids/205763/Apple-Macbook-APPMQD32LEA_05.jpg?v=637751045334670000', stock: 5, description: 'MacBook Pro para trabajo pesado' }
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