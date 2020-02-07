import mongoose from 'mongoose';
import constants from './constants';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.set("debug", true);
  mongoose.connect(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  let db = mongoose.connection;
  db.on("error", err => console.log(err));
  db.once("open", () => console.log("Mongodb running"));
};