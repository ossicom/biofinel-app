import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import connectDatabase from './';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//lesen von env daten
dotenv.config({
  path: './config/env/config.env',
});

//mit mongoDb verbinden
connectDatabase();
/*
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || 'mongodb://localhost/biofinel',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    err.message('Nicht mit DB verbunden!');
    process.exit(1);
  }
};
*/
app.use('/api/uploads', uploadRouter); //New foto uploads to App
app.use('/api/users', userRouter); //mit userRouter verbinden
app.use('/api/products', productRouter); //mit productRouter verbinden
app.use('/api/orders', orderRouter); //mit orderRouter verbinden
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
const __dirname = path.resolve(); //New foto uploads to App
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); //New foto uploads to App
app.get('/', (req, res) => {
  res.send('Server is ready');
});
//error catcher middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
