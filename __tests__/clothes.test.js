'use strict';

const supergoose = require('@code-fellows/supergoose'); //this pulls in and configs and runs mongo memory server and supertest

const { server } = require('../src/server.js');
const mockServer = supergoose(server);

const clothesSchema = require('../src/models/clothes-schema');

const GenericCollection = require('../src/models/generic-collection.js');
const clothes = new GenericCollection(clothesSchema);

describe('Clothes Actions', () => {
  
  it('can read()all records', () => {
    let allClothes = clothes.read();
    expect(allClothes.length).toEqual(clothes.length);
    console.log('this should be clothes test 1');
  });
  
  it('can create() a new clothes item', () => {
    let obj = { name: 'test clothes 2', color: 'BLUE', type: 'PANTS'};
    let expected = { name: 'test clothes 2', color: 'BLUE', type: 'PANTS'};

    return clothes.create(obj)
      .then(record => {
        Object.values(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item]);
          console.log('this should be test clothes 2', item);
        });
      });
  });
  
  it('can read() a single clothes item', () => {
    let obj = { name: 'test clothes 3', color: 'BLACK', type: 'SHOES'};
    let expected = { name: 'test clothes 3', color: 'BLACK', type: 'SHOES'};

    return clothes.create(obj)
      .then(record => {
        return clothes.read(record._id)
          .then(item => {
            expect(record[item]).toEqual(expected[item]);
            console.log('this should be test clothes 3', item);
          });
      });
  });
});

it('can update() a new clothes item', () => {
  let obj = { name: 'test clothes 4', color: 'RED', type: 'SHOES'};
  let expected = { name: 'test clothes 4', color: 'RED', type: 'SHOES'};

  return clothes.create(obj)
    .then(record => {
      return clothes.update(record._id)
        .then(item => {
          expect(record[item]).toEqual(expected[item]);
          console.log('this should be test clothes 4', item);
        });
    });
});

