// Simple in-memory products list to simulate a database

var products = [
  {
    id: 1,
    nombre: 'Cafetera Moulinex',
    descripcion: 'Cafetera de filtro 12 tazas',
    imagen: '/images/products/img-cafetera-moulinex.jpg',
    usuario: { nombre: 'Ana' },
    comentarios: [
      { texto: 'Excelente producto' },
      { texto: 'Llegó rápido' }
    ]
  },
  {
    id: 2,
    nombre: 'MacBook Pro 2019',
    descripcion: 'Laptop 16" i9 16GB 512GB',
    imagen: '/images/products/img-macbook-pro-2019.jpg',
    usuario: { nombre: 'Luis' },
    comentarios: []
  },
  {
    id: 3,
    nombre: 'Samsung Galaxy S10',
    descripcion: 'Smartphone AMOLED 128GB',
    imagen: '/images/products/img-samsung-galaxy-s10.jpg',
    usuario: { nombre: 'Mara' },
    comentarios: [{ texto: 'Muy bueno' }]
  },
  {
    id: 4,
    nombre: 'TV Samsung Smart',
    descripcion: 'Smart TV 50" 4K',
    imagen: '/images/products/img-tv-samsung-smart.jpg',
    usuario: { nombre: 'Diego' },
    comentarios: []
  }
];

module.exports = products;


