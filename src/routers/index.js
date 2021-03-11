import express from 'express';

import ShortController from '../app/controllers/ShortController';
import SmsController from '../app/controllers/SmsController';
import ShortValidator from '../app/middlewares/validators/ShortValidator';
import SmsValidator from '../app/middlewares/validators/SmsValidator';

const router = express.Router();

router
  .get('/sms', SmsController.index)
  .get('/sms/:id', SmsController.show)
  .post('/sms/create', SmsValidator.store, SmsController.store)
  .post('/shorts/list', ShortValidator.index, ShortController.index)
  .post('/shorts/create', ShortValidator.store, ShortController.store);

export default router;
