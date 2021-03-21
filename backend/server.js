import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/biofinel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
//mit userRouter verbinden
app.use('/api/users', userRouter);
//mit productRouter verbinden
app.use('/api/products', productRouter);
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
