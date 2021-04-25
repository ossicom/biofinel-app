import mongoose from 'mongoose';

export default function connectDatabase() {
  try {
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/biofinel', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    err.message('Nicht mit DB verbunden!');
    process.exit(1);
  }
}
