const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parentsSchema = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: String
    },
    
    nationality: {
      type: String
    },
    language: {
      type: String
    },
    gender: {
      type: String
    },
    
    image: {
      type: String
    },
    location: {
      type: String
    },
    occupation: {
      type: String
    },
    children: {
      type: Schema.Object.children
    }

  },
);

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
