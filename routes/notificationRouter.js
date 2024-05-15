const notificationController = require("../controllers/notificationController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/mine").get(dynamicMiddleware.addQuery("user","userId"),notificationController.getAllnotification)
  router.route("/").get(authMiddlewers.restrictTo("admin"),notificationController.getAllnotification).post(authMiddlewers.restrictTo("admin"),notificationController.createnotification);
  router
    .route("/:id")
    .get(notificationController.getnotification)
    .patch(authMiddlewers.restrictTo("admin"),notificationController.updatenotification)
    .delete(notificationController.deletenotification);
  module.exports = router;
  