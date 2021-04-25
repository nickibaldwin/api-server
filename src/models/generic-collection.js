'use strict';

class GenericCollection {

  constructor(schema){
    this.schema = schema;

  }

  create(record) { //we can create a new record using the mongoose.save() method
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  read(_id) {
    if(_id) {
      return this.schema.findOne({_id}); 
    } else { 
      return this.schema.find({}); //find the entire collection and give it back to us
    }
  }
//=========TODO==========
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true }); //new: makes sure mongoose returns the new updated object, not the old one.
  }

//=========TODO==========
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = GenericCollection;
