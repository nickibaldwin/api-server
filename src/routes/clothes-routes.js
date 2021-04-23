'use strict';

const express = require('express');

const GenericCollection = require('../models/generic-collection');
const User = require('../models/clothes-schema.js');
const users = new GenericCollection();

const ClothesModel = require('../models/clothes-schema.js');
const clothes = new ClothesModel();

const router = express.Router();


//RESTful routes
router.get('/clothes-schema', getClothes);
router.get('/clothes-schema/:id', getOneClothes);
router.post('/clothes-schema', createClothes);
router.put('/clothes-schema/:id', updateClothes);
router.delete('/clothes-schema/:id', deleteClothes);

// // RESTful route handlers
async function getClothes(req, res) {
  const id = req.params.id;
  let getAllClothes = await users.get(id);
  res.status(200).json(getAllClothes);
}

async function getOneClothes(req, res) {
  const id = req.params.id;
  let theClothes = await clothes.read(id);
  res.status(200).json(theClothes);
}

async function createClothes(req, res) {
  let content = req.body;
  let createdClothes = await clothes.create(content);
  res.status(201).json(createdClothes);
}

async function updateClothes(req, res) {
  // placeholder for now
  let content = req.body;
  const id = req.params.id;
  let theClothes = await clothes.update(id, content);
  res.status(200).json(theClothes);

}

async function deleteClothes(req, res) {
  // placeholder for now
  const id = req.params.id;
  let deleteClothes = await clothes.delete(id);
  res.status(201).json(deleteClothes);
}

module.exports = router;