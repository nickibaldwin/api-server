'use strict';

const mongoose = require('mongoose'); //pulls mongoose in
// const food = require('./src/models/food-schema.js'); //pulls in our food schema, aka model aka blueprint for our data
// const GenericCollection = require('./src/models/food-collection.js');
// const foodCollection = new GenericCollection(food);
// const clothesSchema = require('./src/models/clothes-schema.js');
// const clothesCollection = new GenericCollection(clothesSchema);
// const MONGODB_URI = 'mongodb://localhost:27017/food'; //settting up connection string for connecting us to Mongo DB
const PORT = process.env.PORT || 3000;
const server = require('./src/server.js');

const options = { useNewUrlParser: true, unifiedTopology: true } //avoids weird parsing issues, boilderplate!!!

//this connects us to the "food" database
mongoose.connect(process.env.MONGODB_URI, options);

server.start(PORT);