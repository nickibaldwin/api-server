'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, requires: true }, //required property for an item
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: [ 'FRUIT', 'VEG', 'MEAT']},
})

const foodModel = mongoose.model('food', foodSchema); //adds an s to 'food'

module.exports = foodModel;
