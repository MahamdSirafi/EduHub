const Notification = require("../models/notificationModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getnotification = handlerFactory.getOne(Notification);
exports.createnotification = handlerFactory.createOne(Notification);
exports.updatenotification = handlerFactory.updateOne(Notification);
exports.deletenotification = handlerFactory.deleteOne(Notification);
exports.getAllnotification = handlerFactory.getAll(Notification);

