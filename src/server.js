'use strict';

//server.js
const express = require('express');
const app = express();//create the server

//requests come to this file, that's why we use app. a bunch. The variable app is the server

const logger = require('./middleware/logger.js');
const clothingRoute = require('./routes/clothes-routes.js');
const foodRoute = require('./routes/food-routes.js');

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');

app.use(express.json());

//middleware
app.use(logger);

app.use(clothingRoute);
app.use(foodRoute);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}