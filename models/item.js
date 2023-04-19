const mongoose = require('mongoose');
const validator = require('validator');

const enhpSchema = new mongoose.Schema({
  energy: {
    type: Number,
    required: true,
  },
  health: {
    type: Number,
    required: true,
  }
})

const weaponSchema = new mongoose.Schema({
  low: {
    type: Number,
    required: true,
  },
  high: {
    type: Number,
    required: true,
  },
  critChance: {
    type: Number,
    required: false,
  },
  critPower: {
    type: Number,
    required: false,
  },
  speed: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  }
})

const wearableSchema = new mongoose.Schema({
  defense: {
    type: Number,
    required: false
  },
  immunity: {
    type: Number,
    required: false
  }
})

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: 'You must enter a valid URL',
    }
  },
  notes: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
    enum: ['Spring', 'Summer', 'Fall', 'Winter']
  },
  xp: {
    type: String,
    required: false,
  },
  enhps: {
    type: [enhpSchema],
    required: false,
  },
  weapon: {
    type: weaponSchema,
    required: false,
  },
  wearable: {
    type: wearableSchema,
    required: false,
  },
  purchase: {
    type: String,
    required: false,
  },
  sell: {
    type: [Number],
    required: false,
  },
  craft: {
    type: craftSchema,
    required: false,
  }
})

const craftSchema = new mongoose.Schema({
  ingredients: {
    type: [itemSchema]
  },
  quantity: {
    type: [Number]
  }
})

module.exports = mongoose.model('item', itemSchema);