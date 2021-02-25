import mobizon from '../../services/mobizon';
import { render } from '../views/SmsView';

export default {
  store: async (req, res) => {
    const sendSms = await mobizon.sendSms(req.body);

    if (sendSms.code !== 0) {
      return res.status(401).json(sendSms);
    }

    return res.status(201).json(render(sendSms.data));
  },
};
