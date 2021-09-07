import { connect } from 'mongoose';

connect(process.env.MONGO_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connect;
