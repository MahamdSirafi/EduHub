const Course = require('../models/courseModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getcourse = handlerFactory.getOne(Course);
exports.createcourse = handlerFactory.createOne(Course);
exports.updatecourse = handlerFactory.updateOne(Course);
exports.deletecourse = handlerFactory.deleteOne(Course);
exports.getAllcourse = handlerFactory.getAllpop1(Course, {
  path: 'teacher',
  select: 'name photo email',
});
