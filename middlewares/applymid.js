const Apply = require('../models/applyModel');
const Not = require('../models/notificationModel');
const course = require('../models/courseModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
exports.isApply = catchAsync(async (req, res, next) => {
  const doc = await Apply.findOne({
    user: req.user._id,
    course: req.params.id,
  });

  if (!doc) {
    return next(new AppError('you are not apply', 400));
  }
  next();
});

exports.iscomplated = catchAsync(async (req, res, next) => {
  console.log(req.user._id, req.params.id);
  const doc = await Apply.findOne({
    user: req.user._id,
    course: req.params.id,
  });

  if (!doc) {
    return next(new AppError('you are not apply in this course', 400));
  }
  if (doc.complated == false) {
    return next(new AppError('you are not complated this course', 400));
  }
  next();
});
exports.tasneem = catchAsync(async (req, res, next) => {
  if (req.body.complated == true) {
    const docapply = await Apply.findById(req.params.id);
    const doccourse = await course.findById(docapply.course);
    const doc = await Not.create({
      user: docapply.user,
      message: `this avaliable ${doccourse.name}`,
    });

    if (!doc) {
      return next(new AppError('is not apply', 400));
    }
  }
  next();
});
