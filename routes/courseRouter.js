const courseController = require('../controllers/courseController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mine')
  .get(
    authMiddlewers.restrictTo("teacher"),
    dynamicMiddleware.addQuery('teacher', 'userId'),
    courseController.getAllcourse
  );

router
  .route('/')
  .get(
    dynamicMiddleware.addQuery('fields', '-test -videos'),
    courseController.getAllcourse
  )
  .post(
    authMiddlewers.restrictTo('teacher'),
    dynamicMiddleware.addVarBody('teacher', 'userId'),
    courseController.createcourse
  );
router
  .route('/:id')
  .get(
    dynamicMiddleware.addQuery('fields', '-test'),
    courseController.getcourse
  )
  .patch(authMiddlewers.restrictTo('teacher'), courseController.updatecourse)
  .delete(
    authMiddlewers.restrictTo('teacher', 'admin'),
    courseController.deletecourse
  );
router
  .route('/:id/test')
  .get(
    dynamicMiddleware.addQuery('fields', 'test'),
    courseController.getcourse
  );
module.exports = router;
