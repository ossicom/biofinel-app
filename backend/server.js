import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/:id', (reg, res) => {
  const product = data.products.find((x) => x._id === reg.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

app.get('/api/products', (reg, res) => {
  res.send(data.products);
});

app.get('/', (reg, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
