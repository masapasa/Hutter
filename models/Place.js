const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  location: {
    type: {
      String,
      enum: ['Point'],
      default: 'Point'
    },
    Coordinates: {
      type: [Number],
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    Postcode: {
      type: Number,
      required: true
    },
    City: {
      type: String,
      required: true
    },
    Country: {
      type: String,
      required: true
    }
  }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place