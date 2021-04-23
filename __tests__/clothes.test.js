'use strict';

// require('@code-fellows/supergoose'); //this pulls in and configs and runs mongo memory server and supertest

// const GenericCollection = require('../models/generic-collections.js');
// const food = new GenericCollection();

// describe('Food Actions', () => {
  
//   it('can create() a new food item', () => {
//     let obj = { name: 'test food 1', calories: 9999, type: 'FRUIT '};
//     let expected = { name: 'test food 1', calories: 9999, type: 'FRUIT'};

//     return food.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(item => { //keys returns an array of all the keys in an object. review this rtechnique for similar object comparison
//           expect(record[item].toEqual(expected[item])
//         }) 
//       });
//   });

// //create, then read so that this test is independent from above
//   it('can read() a single food item', () => {
//     let obj = { name: 'test food 2', calories: 9999, type: 'VEG '};
//     let expected = { name: 'test food 2', calories: 9999, type: 'VEG'};

//     return food.create(obj)
//       .then(record => {
//         return food.read(record._id)
//           .then(item => {
//             //=======TODO==========
//             console.log('this should be test food 2', item);
//           })
//       })
//   })
//   it('can read() a single item', () => {

//   })
//   it('can delete() a new food item', () => {

//   })
//   it('can update() a new food item', () => {

//   })

//   it('validtator something - see front row at 11:36am')
// });

//DELETE TEST ISN"T REQUIRED TODAY