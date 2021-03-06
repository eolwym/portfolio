import mongoose from 'mongoose';
import conf from '../env/env';

const env = conf[process.env.NODE_ENV as 'development' | 'production'];

console.log(env);

export const clientPromise = mongoose
  .connect(env.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((m) => m.connection.getClient())
  .catch((err) => console.log(err));
