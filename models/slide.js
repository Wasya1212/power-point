const mongoose = require('mongoose');
const {Schema} = mongoose;

const slideSchema = new Schema({
  title: {
    type: String,
    minLength: 6
  },
  text: {
    type: String,
    default: ""
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true
  },
  items: [{ type: Schema.Types.ObjectId }],
  items_count: {
    type: Number,
    default: 0
  }
});

module.exports = Slide = mongoose.model('Slide', slideSchema);
