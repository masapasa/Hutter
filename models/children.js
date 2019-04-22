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
    parent: {
      type: Schema.Object.children
    }

  },
);

const Children = mongoose.model('Celebrity', celebritySchema);

module.exports = Children;