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
        origin: [config.origin,
          // 'http://localhost:4200', 'https://archstagram.netlify.app/'
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        // optionsSuccessStatus: 204,
        allowedHeaders: ['Content-Type', 'Authorization', 'auth-cookie']
      })
    );



    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    //   res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
    //   if (req.method === 'OPTIONS') {
    //     res.send(200);
    //   } else {
    //     next();
    //   }
    // });

    // Additional settings to overcome CORS in production

    // app.use(function(req, res, next) {
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept');
    //   res.setHeader('Access-Control-Allow-Credentials', true);
    //   next();
    // });

    app.use('/api', apiRouter);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);
