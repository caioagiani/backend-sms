import { connect } from 'mongoose';

connect(process.env.MONGO_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default connect;
