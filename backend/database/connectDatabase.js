import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');
/*
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log('Veritabanina baglandi');
    })
    .catch((err) => {
      console.error(err);
    });
};
export default connectDatabase;
*/

export default function connectDatabase() {
  (mongoose.connect = process.env.MONGO_URI),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
}
