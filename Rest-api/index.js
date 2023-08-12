global.__basedir = __dirname;
require('dotenv').config();
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
const apiRouter = require('./router');
const cors = require('cors');
// const config = require('./config/config');
const { errorHandler } = require('./utils');


dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    app.use(
      cors({
        origin: config.origin,
        credentials: true,
      })
    );

    // Additional settings to overcome CORS in production

    app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });

    app.use('/api', apiRouter);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);
