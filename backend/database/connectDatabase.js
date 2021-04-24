import mongoose from 'mongoose';

export default function connectDatabase() {
  try {
    mongoose.connect(
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
}
