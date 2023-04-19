const mongoose = require('mongoose');
const validator = require('validator');
const itemSchema = require('./item');

const smallBundleSchema = new mongoose.Schema({
  items: {
    type: [itemSchema]
  },
  reward: {
    type: itemSchema
  }
})

const largeBundleSchema = new mongoose.Schema({
  bundles: {
    type: [smallBundleSchema]
  },
  reward: {
    type: itemSchema
  }
})