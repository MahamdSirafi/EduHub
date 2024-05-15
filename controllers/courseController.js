const Course = require("../models/courseModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcourse = handlerFactory.getOne(Course);
exports.createcourse = handlerFactory.createOne(Course);
exports.updatecourse = handlerFactory.updateOne(Course);
exports.deletecourse = handlerFactory.deleteOne(Course);
exports.getAllcourse = handlerFactory.getAll(Course);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
