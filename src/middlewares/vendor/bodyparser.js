const bodyParser = require('body-parser');

export const initBodyParser = (app) => {
  app.use(bodyParser.json({ limit: '300kb' }));
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: '300kb',
    }),
  );
};
