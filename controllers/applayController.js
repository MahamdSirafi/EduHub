const Applay = require("../models/applayModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getapplay = handlerFactory.getOne(Applay);
exports.createapplay = handlerFactory.createOne(Applay);
exports.updateapplay = handlerFactory.updateOne(Applay);
exports.deleteapplay = handlerFactory.deleteOne(Applay);
exports.getAllapplay = handlerFactory.getAll(Applay);
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
