import cors from 'cors';
import express from 'express';

import routers from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);

export default app;
