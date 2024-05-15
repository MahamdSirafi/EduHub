const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema(
  {
    message: {
      required: [true, 'must enter message'],
      type: String,
    },
    user: {
      required: [true, 'must enter user'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
