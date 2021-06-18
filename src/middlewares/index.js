const { initCors } = require('./vendor/cors');
const { initBodyParser } = require('./vendor/bodyparser');

export const initVendorMiddlewares = (app) => {
  initCors(app);
  initBodyParser(app);
};
