'use strict';

const supergoose = require('@code-fellows/supergoose'); //this pulls in and configs and runs mongo memory server and supertest

const { server } = require('../src/server.js');
const mockServer = supergoose(server);

const foodSchema = require('../src/models/food-schema');

const GenericCollection = require('../src/models/generic-collection.js');
const food = new GenericCollection(foodSchema);

describe('Food Actions', () => {
   
  it('can read()all records', () => {
    let allFood = food.read();
    expect(allFood.length).toEqual(food.length);
    console.log('this should be food test 1');
  });
  
  it('can create() a new food item', () => {
    let obj = { name: 'test food 2', calories: 400, type: 'MEAT'};
    let expected = { name: 'test food 2', calories: 400, type: 'MEAT'};

    return food.create(obj)
      .then(record => {
        Object.values(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item]);
          console.log('this should be test food 2', item);
        });
      });
  });
  
  it('can read() a single food item', () => {
    let obj = { name: 'test food 3', calories: 9999, type: 'VEG'};
    let expected = { name: 'test food 3', calories: 9999, type: 'VEG'};

    return food.create(obj)
      .then(record => { 
        return food.read(record._id)
          .then(item => {
            expect(record[item]).toEqual(expected[item]);
            console.log('this should be test food 3', item);
          });
      });
  });
});

it('can update() a new food item', () => {
  let obj = { name: 'test food 4', calories: 100, type: 'VEG'};
  let expected = { name: 'test food 4', calories: 100, type: 'VEG'};

  return food.create(obj)
    .then(record => {
      return food.update(record._id)
        .then(item => {
          expect(record[item]).toEqual(expected[item]);
          console.log('this should be test food 4', item);
        });
    });
});

