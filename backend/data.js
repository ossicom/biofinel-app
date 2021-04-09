import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Osman',
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
      name: 'Geröstete Haselnüsse',
      category: 'Haselnüsse',
      image: '/images/nuesse/haselnuesse.jpg',
      price: 22,
      countInStock: 20,
      brand: 'kocfindik',
      numReviews: 10,
      description: 'Bio Haselnüsse aus Rize TR',
    },
    {
      name: 'Grüne Oliven',
      category: 'Oliven',
      image: '/images/oliven/oliven.jpg',
      price: 87,
      countInStock: 12,
      brand: 'Datca Oliven',
      numReviews: 10,
      description: 'Oliven Gross',
    },
    {
      name: 'Honig',
      category: 'Honig',
      image: '/images/honig/honigglas.jpg',
      price: 456,
      countInStock: 0,
      brand: 'türkisch',
      numReviews: 10,
      description: 'Bio Honig',
    },
    {
      name: 'Oliven Öl',
      category: 'Olivenöle',
      image: '/images/olive-oel/flasche-o.oel.jpg',
      price: 399,
      countInStock: 40,
      brand: 'Datca',
      numReviews: 10,
      description: 'Kaltgepresste Oliven Öl',
    },
    {
      name: 'Türkischer Honig',
      category: 'Honig',
      image: '/images/olive-oel/flasche-o.oel.jpg',
      price: 3300,
      countInStock: 16,
      brand: 'kocfindik',
      numReviews: 10,
      description: 'Bio Haselnüsse',
    },
    {
      name: 'Türkischer Kaffee',
      category: 'Haselnüsse',
      image: '/images/olive-oel/flasche-o.oel.jpg',
      price: 1,
      countInStock: 2,
      brand: 'kocfindik',
      numReviews: 10,
      description: 'Bio Haselnüsse',
    },
  ],
};

export default data;
