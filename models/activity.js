const mongoose   = require('mongoose');
const enumValues = require('mongoose-enumvalues');
const { Schema } = mongoose;
const activitySchema = new Schema({
  
  name: {
    type: String,
    enum: ['playdate', 'cycling', 'swimming', 'running', 'cooking', 'museum'],
    
  },
  location: {
    type: String,
    required: true
  },
  meettime: {
    type: time,
    required: true
  },
  meetDate: {
    type: time,
    required: true
  }
});
 
// specifics for each method below
const enumOptions = {};
 
UserSchema.plugin(enumValues, enumOptions);
 
module.exports = mongoose.model('activity', activitySchema);