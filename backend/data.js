import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: '1',
      name: 'Geröstete Haselnüsse',
      category: 'Haselnüsse',
      image: '/images/nuesse/haselnuesse.jpg',
      price: 12,
      countInStock: 20,
      brand: 'kocfindik',
      numReviews: 10,
      description: 'Bio Haselnüsse aus Rize TR',
    },
    {
      _id: '2',
      name: 'Grüne Oliven',
      category: 'Oliven',
      image: '/images/oliven/oliven.jpg',
      price: 5,
      countInStock: 12,
      brand: 'Datca Oliven',
      numReviews: 10,
      description: 'Oliven Gross',
    },
    {
      _id: '3',
      name: 'Honig',
      category: 'Honig',
      image: '/images/honig/honigglas.jpg',
      price: 27,
      countInStock: 0,
      brand: 'türkisch',
      numReviews: 10,
      description: 'Bio Honig',
    },
    {
      _id: '4',
      name: 'Oliven Öl',
      category: 'Olivenöle',
      image: '/images/olive-oel/flasche-o.oel.jpg',
      price: 3,
      countInStock: 40,
      brand: 'Datca',
      numReviews: 10,
      description: 'Kaltgepresste Oliven Öl',
    },
    {
      _id: '5',
      name: 'Türkischer Honig',
      category: 'Honig',
      image: '/images/olive-oel/flasche-o.oel.jpg',
      price: 33,
      countInStock: 16,
      brand: 'kocfindik',
      numReviews: 10,
      description: 'Bio Haselnüsse',
    },
    {
      _id: '6',
      name: 'Türkischer Kaffee',
      category: 'Haselnüsse',
      image: '/images/olive-oel/flasche-o.oel.jpg',
      price: 22,
      countInStock: 2,
      brand: 'kocfindik',
      numReviews: 10,
      description: 'Bio Haselnüsse',
    },
  ],
};

export default data;
