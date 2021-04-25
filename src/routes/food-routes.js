'use strict';

const express = require('express');

const GenericCollection = require('../models/generic-collection');

const foodSchema = require('../models/food-schema.js');

const food = new GenericCollection(foodSchema);

const router = express.Router();

// // RESTful route handlers
async function getFood(req, res, next) {
  try {
    const id = req.params.id;
    let getAllFood = await food.read(id);
    res.status(200).json(getAllFood);
  } catch (err) {
    next(err);
  }
}

async function getOneFood(req, res, next) {
  try {
    const id = req.params.id;
    let theFood = await food.read(id);
    res.status(200).json(theFood);
  } catch (err) {
    next(err);
  }
}
  
async function createFood(req, res, next) {
  try {
    let content = req.body;
    console.log(content);
    let createdFood = await food.create(content);
    console.log(createdFood, 'test createdFood');
    res.status(201).json(createdFood);
  } catch (err) {
    next(err);
  }
}

async function updateFood(req, res, next) {
  try {
    let content = req.body;
    const id = req.params.id;
    let theFood = await food.update(id, content);
    res.status(200).json(theFood);
  } catch (err) {
    next(err);
  }
}

async function deleteFood(req, res, next) {
  try{
    const id = req.params.id;
    let deleteFood = await food.delete(id);
    res.status(201).json(deleteFood);
  } catch (err) {
    next(err);
  }
}

//RESTful routes
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports = router;