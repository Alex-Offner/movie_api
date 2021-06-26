const morgan = require("morgan")
const { initCors } = require('./vendor/cors');
const { initBodyParser } = require('./vendor/bodyparser');

export const initVendorMiddlewares = (app) => {
  initCors(app);
  app.use(morgan("common"));
  initBodyParser(app);
  app.use(express.static("public"));
};
