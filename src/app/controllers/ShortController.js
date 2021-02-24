import mobizon from '../../services/mobizon';
import { render, renderMany } from '../views/ShortView';

export default {
  index: async (req, res) => {
    const listShort = await mobizon.listShort(req.body);

    return res.json({ items: renderMany(listShort).reverse() });
  },
  store: async (req, res) => {
    const createShort = await mobizon.createShort(req.body);

    if (createShort.code !== 0) {
      return res.status(401).json(createShort);
    }

    return res.json({
      ...render(createShort.data),
      fullLink: req.body.data.fullLink,
    });
  },
};
