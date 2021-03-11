import mobizon from '../../services/mobizon';
import { render } from '../views/SmsView';

export default {
  index: async (req, res) => {
    const listSms = await mobizon.listSms({
      criteria: {
        from: '',
      },
      pagination: {
        currentPage: '2',
        pageSize: '50',
      },
      sort: {
        campaignId: 'ASC',
      },
    });

    return res.json(listSms);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const getSms = await mobizon.getSms({
      ids: [id],
    });

    console.log(id);

    return res.json(getSms);
  },
  store: async (req, res) => {
    const sendSms = await mobizon.sendSms(req.body);

    if (sendSms.code !== 0) {
      return res.status(401).json(sendSms);
    }

    return res.status(201).json(render(sendSms.data));
  },
};
