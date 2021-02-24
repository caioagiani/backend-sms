import { mobizon } from 'mobizon-node';

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br',
  apiKey: process.env.MOBIZON_KEY,
  format: 'json',
});

export default mobizon;
