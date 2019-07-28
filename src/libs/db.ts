import mongoose from 'mongoose';

const { MONGODB_URL } = process.env;

export const initDB = () =>
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
