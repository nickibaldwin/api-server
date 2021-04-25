'use strict';

const mongoose = require('mongoose');


const clothesSchema = mongoose.Schema({
  name: { type: String, requires: true }, //required property for an item
  color: { type: String, required: true },
  type: { type: String, uppercase: true, enum: [ 'SHIRT', 'PANTS', 'SHOES']},
});

const clothesModel = mongoose.model('clothes-schema', clothesSchema);

module.exports = clothesModel;
