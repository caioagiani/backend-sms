import * as Yup from 'yup';

export default {
  store: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        data: Yup.object().shape({
          fullLink: Yup.string().required(),
          status: Yup.number(),
          expirationDate: Yup.string(),
          comment: Yup.string(),
        }),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      const message = {};

      error.inner.forEach((err) => {
        message[err.path] = err.errors;
      });

      return res.status(400).json({ error: 'Validation fields', message });
    }
  },
  index: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        criteria: Yup.object().shape({
          status: Yup.string(),
          moderatorStatus: Yup.string(),
        }),
        pagination: Yup.object().shape({
          currentPage: Yup.string(),
          pageSize: Yup.string(),
        }),
        sort: Yup.object().shape({
          clickCnt: Yup.string(),
        }),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      const message = {};

      error.inner.forEach((err) => {
        message[err.path] = err.errors;
      });

      return res.status(400).json({ error: 'Validation fields', message });
    }
  },
};
