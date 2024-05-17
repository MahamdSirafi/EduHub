const Apply = require('../models/applyModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getapplay = handlerFactory.getOne(Apply);
exports.createapplay = handlerFactory.createOne(Apply);
exports.updateapplay = handlerFactory.updateOne(Apply);
exports.deleteapplay = handlerFactory.deleteOne(Apply);
exports.getAllapplay = handlerFactory.getAllpop1(
  Apply,
  {
    path: 'course',
    select: 'name classification',
  },
  {
    path: 'user',
    select: 'name email',
  }
);
