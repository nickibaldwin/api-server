'use strict';

const clothesSchema = require('./clothes-schema.js');


class clothesCollection {

  create(record) { //we can create a new record using the mongoose.save() method
    let newRecord = new clothesSchema(record);
    return newRecord.save();
  }

  read(_id) {
    if(_id) {
      return clothesSchema.findOne({_id}); 
    } else { 
      return clothesSchema.find({}); //find the entire collection and give it back to us
    }
  }
//=========TODO==========
  update(_id, record) {
    return clothesSchema.findByIdAndUpdate(_id, record, { new: true }); //new: makes sure mongoose returns the new updated object, not the old one.
  }

//=========TODO==========
  delete(_id) {
    return clothesSchema.findByIdAndDelete(_id);
  }
}

module.exports = clothesCollection;
