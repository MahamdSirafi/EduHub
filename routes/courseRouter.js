const courseController = require("../controllers/courseController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');

  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(dynamicMiddleware.addQuery("fildes","-test -videos"),courseController.getAllcourse).post(courseController.createcourse);
  router
    .route("/:id")
    .get(dynamicMiddleware.addQuery("fildes","-test"),courseController.getcourse)
    .patch(courseController.updatecourse)
    .delete(courseController.deletecourse);
    router
    .route("/:id/test")
    .get(dynamicMiddleware.addQuery("fildes","test"),courseController.getcourse)
  module.exports = router;
  