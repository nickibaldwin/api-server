'use strict';

const foodSchema = require('./food-schema.js');


class FoodCollection {

  create(record) { //we can create a new record using the mongoose.save() method
    let newRecord = new foodSchema(record);
    return newRecord.save();
  }

  read(_id) {
    if(_id) {
      return foodSchema.findOne({_id});
    } else { 
      return foodSchema.find({}); //find the entire collection and give it back to us
    }
  }
//=========TODO==========
  update(_id, record) {
    return foodSchema.findByIdAndUpdate(_id, record, { new: true }); //new: makes sure mongoose returns the new updated object, not the old one.
  }

//=========TODO==========
  delete(_id) {
    return foodSchema.findByIdAndDelete(_id);
  }
}

module.exports = FoodCollection;
