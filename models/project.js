const mongoose = require('mongoose');
const {Schema} = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 6
  },
  description: {
    type: String,
    default: ""
  },
  author: {
    type: Schema.Types.ObjectId,
    required: false // true
  },
  slides: [{ type: Schema.Types.ObjectId }],
  slides_count: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: false
  },
  theme: String
});

module.exports = Project = mongoose.model('Project', projectSchema);
