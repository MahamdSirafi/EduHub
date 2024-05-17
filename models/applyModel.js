const mongoose = require('mongoose');
const applySchema = new mongoose.Schema(
  {
    user: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    course: {
      required: [true, 'must enter course'],
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
    },
    rate: {
      type: Number,
    },
    complated: {
      type: Boolean,
      default: false,
    },
    rasult: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Applay = mongoose.model('Apply', applySchema);
module.exports = Applay;
