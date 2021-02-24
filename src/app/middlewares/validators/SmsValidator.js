import * as Yup from 'yup';

export default {
  store: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        recipient: Yup.string().required(),
        from: Yup.string(),
        text: Yup.string().required(),
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
