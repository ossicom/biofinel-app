import mongoose from 'mongoose';

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('Baglanti saglandi');
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDatabase;
