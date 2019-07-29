import mongoose from 'mongoose';

const { MONGODB_URL } = process.env;

export const connectDB = () =>
  mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(error => {
      console.error(`
      Error Occured:
      - ${error.name}: ${error.message}
      - Please make sure your MONGODB_URL is valid.
      `);
      process.exit(0);
    });
