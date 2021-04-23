'use strict';

const express = require('express');

//TODO check this file path
const FoodCollection = require('../models/food-collection.js');
const User = require('../models/food-schema.js');
const food = new FoodCollection();

const foodModel = require('../models/food-schema.js');

const router = express.Router();


//RESTful routes
router.get('/food-schema', getFood);
router.get('/food-schema/:id', getOneFood);
router.post('/food-schema', createFood);
router.put('/food-schema/:id', updateFood);
router.delete('/food-schema/:id', deleteFood);

// // RESTful route handlers
async function getFood(req, res) {
  const id = req.params.id;
  let getAllFood = await food.read(id);
  res.status(200).json(getAllFood);
}

async function getOneFood(req, res) {
  const id = req.params.id;
  let theFood = await food.read(id);
  res.status(200).json(theFood);
}

async function createFood(req, res) {
  let content = req.body;
  let createdFood = await food.create(content);
  res.status(201).json(createdFood);
}

async function updateFood(req, res) {
  // placeholder for now
  let content = req.body;
  const id = req.params.id;
  let theFood = await food.update(id, content);
  res.status(200).json(theFood);

}

async function deleteFood(req, res) {
  // placeholder for now
  const id = req.params.id;
  let deleteFood = await food.delete(id);
  res.status(201).json(deleteFood);
}

module.exports = router;