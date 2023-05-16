import mongoose from 'mongoose';

export class MongoDbConnection {
  run() {
    mongoose
      .connect(process.env.MONGOBD_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.log(err));
  }
}
