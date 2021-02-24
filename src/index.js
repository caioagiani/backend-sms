import cors from 'cors';
import express from 'express';

import routers from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(3333 || process.env.PORT, () =>
  console.log('Server listening on http://localhost:3333')
);
