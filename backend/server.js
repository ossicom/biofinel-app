const express = require('express');
const path = require('path');
const productRouter = require('./routers/productRouter.js');
const userRouter = require('./routers/userRouter.js');
const orderRouter = require('./routers/orderRouter.js');
const uploadRouter = require('./routers/uploadRouter.js');
const connectDB = require('../config/db.js');
const dotenv = require('dotenv');
//lesen von env daten
dotenv.config({ path: '../config/.env/' });

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/uploads', uploadRouter); //New foto uploads to App
app.use('/api/users', userRouter); //mit userRouter verbinden
app.use('/api/products', productRouter); //mit productRouter verbinden
app.use('/api/orders', orderRouter); //mit orderRouter verbinden
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

//New foto uploads to App
/*const __dirname = path.resolve();*/
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); //New foto uploads to App
/*
app.use(express.static(path.join(__dirname, '/frontend/build'))); //nach dem Build
app.get(
  '*',
  (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')) //nach dem build
);
*/

app.get('/', (req, res) => {
  res.send('Server is ready');
});

//error catcher middleware
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
