'use strict';

const express = require('express');

const GenericCollection = require('../models/generic-collection');

const clothesSchema = require('../models/clothes-schema.js');

const clothes = new GenericCollection(clothesSchema);

const router = express.Router();



// // RESTful route handlers

//ES6 version
const getClothes = async(req, res, next) => {
  try {
    const id = req.params.id;
    let getAllClothes = await clothes.read(id);
    res.status(200).json(getAllClothes);
  } catch (err) {
    next(err);
  }
};
  
async function getOneClothes(req, res, next) {
  try {
    const id = req.params.id;
    let theClothes = await clothes.read(id);
    res.status(200).json(theClothes);
  } catch (err) {
    next(err);
  }
}
  
async function createClothes(req, res, next) {
  try {
    let content = req.body;
    console.log(content , 'test');
    let createdClothes = await clothes.create(content);
    res.status(201).json(createdClothes);
  } catch (err) {
    next(err);
  }
}
  
async function updateClothes(req, res, next) {
  try {
    let content = req.body;
    const id = req.params.id;
    let theClothes = await clothes.update(id, content);
    res.status(200).json(theClothes);
  } catch (err) {
    next(err);
  }
}

async function deleteClothes(req, res, next) {
  try {
    const id = req.params.id;
    let deleteClothes = await clothes.delete(id);
    res.status(201).json(deleteClothes);
  } catch (err) {
    next(err);
  }
}


//RESTful routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);
  
module.exports = router;