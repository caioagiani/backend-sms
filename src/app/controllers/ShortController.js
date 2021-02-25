import mobizon from '../../services/mobizon';
import { render, renderMany } from '../views/ShortView';

export default {
  index: async (req, res) => {
    const listShort = await mobizon.listShort(req.body);

    const { items } = listShort.data;

    return res.json({ items: renderMany(items).reverse() });
  },
  store: async (req, res) => {
    const createShort = await mobizon.createShort(req.body);

    if (createShort.code !== 0) {
      return res.status(401).json(createShort);
    }

    const { data } = createShort;
    const { fullLink } = data;

    return res.status(201).json({ ...render(data), fullLink });
  },
};
