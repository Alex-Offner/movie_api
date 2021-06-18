const cors = require('cors');

export const initCors = (app) => {
  app.use(
    cors(),
  );
};
