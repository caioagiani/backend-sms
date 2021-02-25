import app from './app';
import './services/mongoose';

app.listen(3333 || process.env.PORT, () => {
  console.log({
    server: 'http://localhost:3333',
    database: 'mongodb',
  });
});
