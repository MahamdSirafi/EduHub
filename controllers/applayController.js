const Applay = require('../models/applayModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getapplay = handlerFactory.getOne(Applay);
exports.createapplay = handlerFactory.createOne(Applay);
exports.updateapplay = handlerFactory.updateOne(Applay);
exports.deleteapplay = handlerFactory.deleteOne(Applay);
exports.getAllapplay = handlerFactory.getAllpop1(
  Applay,
  {
    path: 'course',
    select: 'name classification',
  },
  {
    path: 'user',
    select: 'name email',
  }
);
